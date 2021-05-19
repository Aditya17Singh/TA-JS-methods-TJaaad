let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let longest = words.sort(
  function(a,b){
    return a.length - b.length
  }
)

// let longestString = [...strings].sort((a,b) => a.length - b.length).pop();

// - Convert the above array "words" into an array of length of word instead of word.
let wordsLength = words.map((w) => w.length)
// - Create a new array that only contains word with atleast one vowel.
function checkVowel (words){
  return (
    words.toLowerCase().includes("a") ||
    words.toLowerCase().includes("e") ||
    words.toLowerCase().includes("i") ||
    words.toLowerCase().includes("o") ||
    words.toLowerCase().includes("u") 
  )
}
let vowelFilter = words.filter((w) => checkVowel(w))
// - Find the index of the word "rhythm"
words.findIndex((w) => w == "rhythm")
// - Create a new array that contians words not starting with vowel.
let nowWithVowel = words.filter((w) => !checkVowel(w[0]))
// - Create a new array that contianse words not ending with vowel

let notEndVowel = words.filter((w) => !checkVowel(w[w.length -1]))

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = numbers.reduce((acc,cv) => acc + cv);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let mutiply = numbers.filter(num => num % 3 === 0);
// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter(num => num % 2 !== 0);
// - Create a new array that should have true for even number and false for odd numbers.
let map1 = numbers.map(num => {
  if(num % 2 === 0){
    return true;
  }else {
    return false;
  }
})
// - Sort the above number in assending order.
let sort1 = [...numbers].sort((a,b) => a - b)
// - Does sort mutate the original array?

// yes it mutates the original  array length.

// - Find the sum of the numbers in the array.
let sumArray1 = numbers.reduce((acc,cv) => acc + cv);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let averageNumbers = numbers.reduce((a,b) =>   a + b)/ numbers.length
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWorldLength(words){
  return words.map((w) => w.length)
  .reduce((acc,cv) => {
    return acc + cv;
  }
  )
}