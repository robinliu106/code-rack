//Object Destructuring

// const person = {
//     name: "Robin",
//     age: 24,
//     location: {
//         city: "Boston",
//         temp: 72,
//     },
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: { name: "Penguin" },
// };

// const { name: publisherName = "Self Published" } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ["1299 S Juniper Street", "Boston", "Massachusetts", "01234"];
const [, city, state = "New York"] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ["Coffee (iced)", "$2.00", "$4.50", "$2.75"];
const [drink, , med] = item;

//Grab first and third items
console.log(`A medium ${drink} costs ${med}`);
