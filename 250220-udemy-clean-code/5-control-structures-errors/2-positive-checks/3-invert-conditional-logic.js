main();

function main() {
  const transactions = [
    {
      id: "t1",
      type: "PAYMENT",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "23.99",
    },
    {
      id: "t2",
      type: "PAYMENT",
      status: "OPEN",
      method: "PAYPAL",
      amount: "100.43",
    },
    {
      id: "t3",
      type: "REFUND",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "10.99",
    },
    {
      id: "t4",
      type: "PAYMENT",
      status: "CLOSED",
      method: "PLAN",
      amount: "15.99",
    },
  ];

  processTransactions(transactions);
}

function processTransactions(transactions) {
  //using Guards
  if (isEmpty(transactions)) {
    showErrorMessage("No transactions provided!");
    return;
  }

  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

//extract to function and using positive phrasing
function isEmpty(transactions) {
  return !transactions || transactions.length <= 0;
}

//extract to function and using positive phrasing
function showErrorMessage(message) {
  console.log(message);
}

//extract to function
function processTransaction(transaction) {
  //using Guards
  if (transaction.type !== "PAYMENT" && transaction.type !== "REFUND") {
    showErrorMessage(`Invalid transaction type! ${transaction}`);
    return;
  }
  //using Guards
  if (transaction.status !== "OPEN") {
    showErrorMessage("Invalid transaction type!");
    return;
  }

  if (usesTransactionMethod(transaction, "CREDIT_CARD")) {
    processCreditCardTransaction(transaction);
  } else if (usesTransactionMethod(transaction, "PAYPAL")) {
    processPaypalTransaction(transaction);
  } else if (usesTransactionMethod(transaction, "PLAN")) {
    processPlanTransaction(transaction);
  }

  //   if (transaction.type === "PAYMENT") {
  //     processPayment(transaction);
  //   } else if (transaction.type === "REFUND") {
  //     processRefund(transaction);
  //   }
}

// define function specifically for payment
// function processPayment(paymentTransaction) {
//   if (paymentTransaction.method === "CREDIT_CARD") {
//     processCreditCardPayment(paymentTransaction);
//   } else if (paymentTransaction.method === "PAYPAL") {
//     processPayPalPayment(paymentTransaction);
//   } else if (paymentTransaction.method === "PLAN") {
//     processPlanPayment(paymentTransaction);
//   }
// }

// // define function specifically for refund
// function processRefund(refundTransaction) {
//   if (refundTransaction.method === "CREDIT_CARD") {
//     processCreditCardRefund(refundTransaction);
//   } else if (refundTransaction.method === "PAYPAL") {
//     processPayPalRefund(refundTransaction);
//   } else if (refundTransaction.method === "PLAN") {
//     processPlanRefund(refundTransaction);
//   }
// }

function usesTransactionMethod(transaction, method) {
  return transaction.method === method;
}

function processCreditCardTransaction(transaction) {
  if (isPayment(transaction)) {
    processCreditCardPayment(transaction);
  } else if (isRefund(transaction)) {
    processCreditCardCreditCard(transaction);
  } else {
    showErrorMessage("Invalid Transaction Type");
  }
}

function processPaypalTransaction(transaction) {
  if (isPayment(transaction)) {
    processPayPalPayment(transaction);
  } else if (isRefund(transaction)) {
    processPayPalRefund(transaction);
  } else {
    showErrorMessage("Invalid Transaction Type");
  }
}

function processPlanTransaction(transaction) {
  if (isPayment(transaction)) {
    processPlanPayment(transaction);
  } else if (isRefund(transaction)) {
    processPlanRefund(transaction);
  } else {
    showErrorMessage("Invalid Transaction Type");
  }
}

function isPayment(transaction) {
  return transaction.type === "PAYMENT";
}

function isRefund(transaction) {
  return transaction.type === "REFUND";
}

function processCreditCardPayment(transaction) {
  console.log(
    "Processing credit card payment for amount: " + transaction.amount
  );
}

function processCreditCardRefund(transaction) {
  console.log(
    "Processing credit card refund for amount: " + transaction.amount
  );
}

function processPayPalPayment(transaction) {
  console.log("Processing PayPal payment for amount: " + transaction.amount);
}

function processPayPalRefund(transaction) {
  console.log("Processing PayPal refund for amount: " + transaction.amount);
}

function processPlanPayment(transaction) {
  console.log("Processing plan payment for amount: " + transaction.amount);
}

function processPlanRefund(transaction) {
  console.log("Processing plan refund for amount: " + transaction.amount);
}
