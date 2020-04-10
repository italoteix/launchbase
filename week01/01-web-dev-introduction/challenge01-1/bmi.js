// Variables declaration
const name = "Carlos";
const weight = 84;
const height = 1.88;

// BMI's calculation
const bmi = weight / (height * height);

// Conditionally printing the result
if (bmi >= 30) {
  console.log(`${name}, you are overweighted!`)
} else {
  console.log(`${name}, you are not overweighted!`)
}
