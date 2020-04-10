// Variables declaration
const users = [
  {
    name: "Salvio",
    revenues: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    revenues: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    revenues: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
];

function calcBalance(revenues, expenses) {
  return sum(revenues) - sum(expenses);
}

function sum(numbers) {
  let total = 0;
  for (number of numbers) {
    total += number;
  }
  return total;
}

function printUserBalance(user) {
  const balance = calcBalance(user.revenues, user.expenses);

  if (balance > 0) {
    console.log(`${user.name} has a POSITIVE balance of ${balance.toFixed(2)}.`);
  } else {
    console.log(`${user.name} has a NEGATIVE balance of ${balance.toFixed(2)}.`);
  }
}

function iterateUsers(users) {
  for (user of users) {
    printUserBalance(user);
  }
}

iterateUsers(users);

