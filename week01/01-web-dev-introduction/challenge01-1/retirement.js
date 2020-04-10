// Variables declaration
const name = "Silvana";
const sex = "F";
const age = 48;
const contribution = 23;

// Conditionally printing the result
if (sex === "F") {
  if (contribution >= 30 || age + contribution >= 85) {
    console.log(`${name}, you can retire!`)
  } else {
    console.log(`${name}, you can not retire!`)
  }
} else if (sex === "M") {
  if (contribution >= 35 || age + contribution >= 95) {
    console.log(`${name}, you can retire!`)
  } else {
    console.log(`${name}, you can not retire!`)
  }
}
