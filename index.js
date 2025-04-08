// rest and spread operator
// rest operator is used to gather values into array.its often used in function parameters to collect all remaining arguments
// its defined with 3 dots(...)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3)); // 6
  console.log(sum(1, 2, 3, 4, 5)); // 15
//   ----------
function greet (greeting, ...names){
    console.log(`${greeting}, ${names.join(` and `)}`);

}
greet('hello', 'alice', 'bob', 'charlie');


function addNumbers(...num){
    console.log(num);

}
addNumbers(1, 2, 3);
// spread operator
// spreads elements from an array or object into invidual parts
// its defined with (...)
const numbers = [4, 7, 12];
console.log(Math.max(...numbers));

const original = [1, 2, 3];
const copy = [...original];

console.log(copy); // [1, 2, 3]
const user = { name: 'Alice', age: 30 };
const updatedUser = { ...user, age: 31 };

console.log(updatedUser); // { name: 'Alice', age: 31 }



const [first, ...rest] = [10, 20, 30, 40, 50];
console.log(first);
console.log(rest);
answer=>
[10]
[20,30,40,50]

function findMaximum(...nums) {
    return Math.max(...nums);
  }
  console.log(findMaximum(5,20,30,40,50,60))
  60


