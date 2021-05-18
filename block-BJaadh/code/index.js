// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/
let clone = [...strings]
let cloneShift = [...strings]
let clonePop = [...strings]
let sortNum = [...numbers]
let unShiftWord = [...strings]
let sliceNum = [...numbers]
let sliceStr = [...strings]
let spliceNum = [...numbers]
// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentence like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
clone.push("called","sentence")
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
clone.join(" ")
// - Remove the first word in the array (strings)
cloneShift.shift();
// - Find all the words that contain 'is' use string method 'includes'
let allIs = strings.filter((string) => string.includes("is"))
// - Find all the words that contain 'is' use string method 'indexOf'
let allIsAgain = strings.filter(
  (string) => string.indexOf("is") !== -1
)
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let isDivisible =  numbers.every((cv)=>{
    return cv % 3 === 0;
})
console.log(isDivisible);
// -  Sort Array from smallest to largest
let isSmallest = sortNum.sort((a,b)=> {
  return a - b;
})
console.log(isSmallest);

// - Remove the last word in strings
clonePop.pop()
// - Find largest number in numbers
let accum = numbers.reduce((acc,cv) =>{
  if(  acc < cv){
    acc = cv
  } return acc;
},0)
console.log(accum);

// let target = numbers.sort((a,b) => a - b).pop();
// - Find longest string in strings
let longestString = [...strings].sort((a,b) => a.length - b.length).pop();
// - Find all the even numbers
let evenNumbers = numbers.filter(function(value){
  return value % 2 === 0;
})
console.log(evenNumbers);

// - Find all the odd numbers
let oddNumbers = numbers.filter(function(value){
  return value % 2 !== 0;
})
console.log(oddNumbers);
// - Place a new word at the start of the array use (unshift)
(unShiftWord.unshift("Aditya"));
console.log(unShiftWord);
// - Make a subset of numbers array [18,9,7,11]
console.log(sliceNum.slice(3,7));
// - Make a subset of strings array ['a','collection']
console.log(sliceStr.slice(2,4));
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(numbers.indexOf(12), 1, 1221)
// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filterCustomer = customers.filter((customer) =>
customer.firstname.startsWith("J")
);
// - Create new array with only first name
let firstNameCustomer = customers.map((customer) =>
customer.firstname
);
// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically
[...fullNameCustomer].sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
