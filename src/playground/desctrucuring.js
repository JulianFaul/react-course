
// // Object destrcture
// // const person = {
// //     name: "Julian",
// //     age: 27,
// //     location: {
// //         city: "Cape Town",
// //         temp: 55
// //     }
// // }

// // const {name = 'Anonymous', age} = person;


// // console.log(`${name} is ${age} `)

// // const {temp,city} = person.location

// // if(temp && city){
// //     console.log(`It's ${temp} in ${city} `)
// // }

// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Panguin"
//     }
// }
// // renaming and setting a default
// const {name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName)


// Array destrcture

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvanie','19147'];
// const [, city, state = "Test Thing"] = address;
// console.log(`You are in  ${state}. `)

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];

const [itemName, ,mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice}`)