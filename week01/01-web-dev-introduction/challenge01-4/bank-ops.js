const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(transaction) {
  user.transactions.push(transaction);

  if (transaction.type === "credit") {
    user.balance += transaction.value;
  } else {
    user.balance -= transaction.value;
  }
}

function getHigherTransactionByType(transactionType) {
  let maxTransaction = { type: transactionType, value: 0 };

  for (transaction of user.transactions) {
    if (transaction.type === transactionType && transaction.value > maxTransaction.value) {
      maxTransaction = transaction;
    }
  }

  return maxTransaction;
}

function getAverageTransactionValue() {
  let total = 0;

  for (transaction of user.transactions) {
    total += transaction.value;
  }

  return total / user.transactions.length;
}

function getTransactionsCount() {
  let creditCount = 0;
  let debitCount = 0;

  for (transaction of user.transactions) {
    if (transaction.type === "credit") {
      creditCount++;
    } else {
      debitCount++;
    }
  }

  return { credit: creditCount, debit: debitCount };
}
