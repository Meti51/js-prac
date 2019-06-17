const num = 5;
let age = 30;

const name = 'John';
const isCool = true;
const rating = 4.5;
// const isCool = true;
const x = null;
const y = undefined; //let y;


console.log(age);
console.log(typeof name);
console.log(typeof rating);

//concat
console.log(`my name is ${name} and i am ${age}`);

/* ---------------------------------------------------------- */
//string manipulaation
const s = "hello world";
console.log(s.length);
console.log(s.substring(0, 5))

console.log(s.split('')) // creates an array

/* ---------------------------------------------------------- */
// array
const fruit = ['apples','oranges', 20, 3];
const numbers = new Array(1,2,3,4);
fruit.push('banana') ///add at back
fruit.unshift('strawb') //add at front
fruit.pop();

console.log(numbers)
console.log(fruit)

console.log(Array.isArray(fruit)) //chekc is is array
console.log(fruit.indexOf('oranges')) //return index

/* ---------------------------------------------------------- */
// Object literals
const person = {
  name: 'john',
  last: 'doe',
  age: 30,
  hobbies: ['music', 'movies'],
  address: {
    street: '80th',
    city: 'Richfield'
  }
}
console.log(person)
console.log(person.hobbies[1])

const {address: { street}} = person;//destructuring
console.log(street)
person.email = "jondoe@gmail.com"; //add

/* ---------------------------------------------------------- */
// array of Object
const arr = [
  {name: 'john',
  last: 'doe',
  age: 40,
  hobbies: ['music', 'movies'],
},
  {name: 'john',
  last: 'doej',
  age: 30,
  hobbies: ['music', 'movies'],
}]
console.log(arr)

/* ---------------------------------------------------------- */
//JSON
const todoJson = JSON.stringify(arr);
console.log(todoJson)

/* ---------------------------------------------------------- */
// for loop
for(let i= 0; i< 10; i++){
  console.log(`num: ${i}`);
}

for(let todo of arr){ //array loop
  console.log(todo.last)
}

// foreach
arr.forEach(
  function(todo) {
  console.log(todo.last)
})
//map
const todotext = arr.map(
  function(todo) {
  return todo.last   // returns array
})
console.log(todotext)
//filter
const todoComp = arr.filter(
  function(todo) {
  return todo.age == 30   // returns array
}).map(function(todo){
  return todo.last
})
console.log(todoComp)
