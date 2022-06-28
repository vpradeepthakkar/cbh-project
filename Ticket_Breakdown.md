# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Database changes
Description: Create a table schema which can map facility generated id to the Internal Id
Acceptance Criteria: Create a table called AGENT_MAP
Effort: 6hrs

Ticket 2: Backend - Insert/Update Facility generated Agent Id
Assumption: 
1. The Facilities have an Admin protal to onboard and agent and/or update thier profiles
2. The Facility Generated Ids are manual entry and not some custom logic that needs to be implemented in the application
Description: We need to update the existing Agent onboarding end-point to accept the Facility generated id as part of the payload
The business logic of the end point needs to create the Agent profile as usual. Once that is created the AGENT_MAP table should be updated with the new profile. 
Acceptance Criteria: Creation of a new profile should add the corresponding map in the AGENT_MAP table. In case the Facility does not wish to use the custom id, the system generated id should be used as Facility Id for consistancy
Effort: 40hr (Development + Unit Test) + 10hr (Manual Testing)

Ticket 3: Frontend - Insert/Update Facility generated Agent Id
Assumption: 
1. The Facilities have an Admin protal to onboard and agent and/or update thier profiles
2. The Facility Generated Ids are manual entry and not some custom logic that needs to be implemented in the application
Description: The Admin portal needs to be updated to provide the field for custom id
Effort: 20hr (Development + Unit Test) + 10hr (Manual Testing)

Ticket 4: Backend - Updates to Report Generation Query
Description: The current portal/mechanism to generate reports need to list the Ids from AGENT_MAP table. This shall entail updates to the existing Queries
Acceprance Criteria: The queries need to be updated to use AGENT_MAP joined with relevant table so that reports and frone-end portals use the Facility generated ids instead of system generated ids