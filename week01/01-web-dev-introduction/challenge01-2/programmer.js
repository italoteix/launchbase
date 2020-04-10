// Variables declaration
const programmer = {
  name: "Ítalo",
  age: 29,
  techs: [
    { name: 'JavaScript', specialty: 'Web/Mobile' },
    { name: 'C++', specialty: 'Desktop' },
    { name: 'Python', specialty: 'Data Science' }
  ]
};

// Printing the result
console.log(`The user ${programmer.name} is ${programmer.age} years old and uses ${programmer.techs[0].name} technology with specialty in ${programmer.techs[0].specialty}.`);
