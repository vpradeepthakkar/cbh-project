const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey when given in event and string length less than 256", () => {
    let event = {
      partitionKey:"This is event with partition key"
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("This is event with partition key");
  });

  it("Returns the encrypted partitionKey when given in event and string length more than 256", () => {
    let event = {
      partitionKey:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("0e861535e9a92bc92266bb94769ef034af43ec35ccdaf2b9e4ed57cdf92cf40f318b62a1df766106fec3263f1371484794793d1571fabad052df43ad2e4d72c3");
  });

  it("Returns the partitionKey when given in event and partitionKey is an object", () => {
    let event = {
      partitionKey:{
        innerData:"This is event with partition key"
      }
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe('{"innerData":"This is event with partition key"}');
  });

  it("Returns the encrypted string when partitionKey not given in event", () => {
    let event = {
      notPartitionKey:"This is event with partition key"
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("45747c1f3faadf7019a7b0900fea5cc2a546d965172a3c210752f9f573c6e7d5a7d0925f2b532ad14a32ec7dfc0c78ce3142d0c10bcc8a20077831dbba044b3d");
  });

});
