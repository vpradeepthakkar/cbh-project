const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey());
console.log(deterministicPartitionKey({partitionKey:"This is event with partition key"}))
console.log(deterministicPartitionKey({notPartitionKey:"This is event with partition key"}))