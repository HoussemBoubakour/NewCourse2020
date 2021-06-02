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
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = "Williams";
console.log("Before marriage:", jessica);
console.log("After marriage:", jessicaCopy);
