const patients = require("./patients");
// console.table(patients);

// how to loop / iterate over an array

//  for       --> common in programming

// 1. initialiser
// 2. condition -- when do we want to continue looping
// 3. loop

for (let i = 0; i < patients.length; i++) {
  console.log(i);
}

console.log("I've finished looping");

//  while     --> common in programming
let j = 0;
while (j < patients.length) {
  console.log(j);
  j++;
}
console.log("Finished looping with while");

// callbacks - a function that I pass in as a parameter

const callback = function () {
  console.log("Hello from the callback");
};
console.log(callback);

callback();

const functionThatIWantToExecuteForEachElementOfTheArray = (element, index) => {
  console.log(
    "Hello from functionThatIWantToExecuteForEachElementOfTheArray",
    index
  );
};

patients.forEach(functionThatIWantToExecuteForEachElementOfTheArray);

// array functions -- all use callbacks
//  forEach - when I want to do something for each element of the array

patients.forEach((patient, index) => {
  console.log(index);
});
console.log("Finished looping with forEach");

// find - I want a specific element in the array - returns one element

const patient = patients.find((element, index) => {
  // if I return true, then the current element is what .find returns
  // if I never return true, then .find returns undefined
  console.log("I'm looking at patient with index", index);
  return element.firstName === "Quintilla";
});

console.log(patient);

// filter - when I want a subset of the array - returns an array
const patientsOver50 = patients.filter((element, index) => {
  return element.age > 50;
});

console.table(patientsOver50);

// map - when I want to transform each element of the array - returns a new array
const firstNamesOfPatients = patients.map((element, index) => {
  // whatever I return here, will replace element
  return element.firstName;
});

console.log(firstNamesOfPatients);

// sort - sort the array
// receives different than the other callbacks in array functions
// modifies the original array

patients.sort((elementA, elementB) => {
  // elementA.age = 21, elementB.age = 31

  // if (elementA.age < elementB.age) {
  //   // b will go after a
  //   return -1; // or anything below 0
  // }
  // if (elementA.age > elementB.age) {
  //   // b will go before a
  //   return 1; // or anything above 0
  // }
  // // I don't care if b goes before a or the other way around
  // return 0;

  // return elementB.height - elementA.height; // sort by number

  return elementB.firstName.localeCompare(elementA.firstName); // sort by string
});
console.table(patients);

// git
