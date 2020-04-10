// Variables declaration
const users = [
  { name: "Carlos", techs: ["HTML", "CSS"] },
  { name: "Jasmine", techs: ["JavaScript", "CSS"] },
  { name: "Tuane", techs: ["HTML", "Node.js"] }
];

function printUserTechs(user) {
  console.log(`${user.name} works with ${user.techs.join(', ')}.`)
}

function iterateUsers(users) {
  for (user of users) {
    printUserTechs(user);
  }
}

iterateUsers(users);
