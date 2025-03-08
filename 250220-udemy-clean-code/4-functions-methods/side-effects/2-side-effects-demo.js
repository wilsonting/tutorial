//-------------
// Question 1
//-------------
// Side effect expected?
// Answer: Side effect expected
function connectDatabase() {
  //   //#1 - Side effect - Changes something in system operation
  //   const didConnect = database.connect();
  //   if (didConnect) {
  //     return true;
  //   } else {
  //     //#2 - Side effect (might be unexpected)
  //     console.log("Could not connect to database!");
  //     return false;
  //   }
  const didConnect = database.connect();
  return didConnect;
}

function initApp() {
  const success = connectDatabase();
  if (!success) {
    console.log("Could not connect to database");
  }
  //...
}

//-------------
// Question 2
//-------------
// Side effect expected?
// Answer: No side effects - Does not change system state
function determineSupportAgent(ticket) {
  if (ticket.requestType === "unknown") {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

//-------------
// Question 3
//-------------
// Side effect and unexpected?
// Answer: Side effect and unexpected
function isValid(email, password) {
  if (!email.includes("@") || password.length < 7) {
    // console.log("Invalid input!");
    return false;
  }
  return true;
}

function createUser(email, password) {
  if (!isValid(email, password)) {
    console.log("Invalid input");
  }
}
