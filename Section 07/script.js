// primitive types

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = "Williams";
jessicaCopy.family.push("John");
jessicaCopy.family.push("Mary");

console.log("Before marriage:", jessica);
console.log("After marriage:", jessicaCopy);
