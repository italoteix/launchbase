// Variables declaration
const users = [
  { name: "Carlos", techs: ["HTML", "CSS"] },
  { name: "Jasmine", techs: ["JavaScript", "CSS"] },
  { name: "Tuane", techs: ["HTML", "Node.js"] }
];

function checkIfUsesCSS(user) {
  for (tech of user.techs) {
    if (tech === "CSS") {
      return true;
    }
  }
  return false;
}

function printCSSUsers(users) {
  for (user of users) {
    if (checkIfUsesCSS(user)) {
      console.log(`The user ${user.name} works with CSS.`);
    }
  }
}

printCSSUsers(users);
