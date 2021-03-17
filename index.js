// what is an array? list of items
const arrayOfNumbers = [1, 2, 3, 4, 5, 42, 4985];
const arrayOfStrings = ["Hello", "World", "Class 50"];
const arrayOfObjects = [
  { name: "Dom", age: 31 },
  { name: "Jack Black", age: 50 },
];
const arrayOfMixedItems = [1, "string", {}, false]; // this would be a weird array - very uncommon

// how to access elements in an array
console.log("Element with index 2 in arrayOfNumbers", arrayOfNumbers[2]); // 3

const indexOfTheElementThatIAmInterestedIn = 1;
console.log(
  "Element with index 1 in arrayOfStrings",
  arrayOfStrings[indexOfTheElementThatIAmInterestedIn]
); // World

// what is an object? complex data type
const lastName = "Gemoli";

const myObject = {
  name: "Domenico",
  // lastName: "Gemoli",
  // lastName: lastName,
  lastName, // shorthand assignment -> only works if the name of the variable, and the name of the property are the same
  age: 31,
  interests: ["Comedy", "Food"],
  isDevilishlyHandsome: true,
};
console.log("Surname:", lastName);
console.log("Surname in object:", myObject.lastName);
//    how to access elements in an object

console.log(myObject.name); // dot notation
console.log(myObject["age"]); // square brackets

const nameOfThePropertyThatIAmInterestedIn = "isDevilishlyHandsome";
console.log(myObject[nameOfThePropertyThatIAmInterestedIn]);
