let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like `The length of [message] is [length]`
console.log(`The length of [message] is ${message.length}`);
// Log the character at index 0 of the variable message like `The first character of [message] is [character]`
let index = 0;
console.log(`The first character of [message] is ${message.charAt(index)}`);
// Log the last character of message using length like `The last character of [message] is [character]`
let index1 = message.length - 2;
console.log(`The last character of [message] is ${message.charAt(index1)}`);
// Log the index of word "you" in message
let searchTeam = "you";
let indexOfFirst = message.indexOf(searchTeam);
console.log(indexOfFirst);
// Log the index of word "still" in message
let searchTeam1 = "still"
let indexOfFirst1 = message.indexOf(searchTeam1);
console.log(indexOfFirst1);
// Log the index of word "answers" in message
let searchTeam2 = "answer"
let indexOfFirst2 = message.indexOf(searchTeam2);
console.log(indexOfFirst2);
// Log true or false based on whether the word "answers" exist in message or not
let word = "answers";
console.log(`The word "${word}" ${message.includes(word) ? "is" : "is not"}`);
// Log true or false based on whether the word "they" exist in message or not
let word1 = "they";
console.log(`The word "${word1}" ${message.includes(word1) ? "is" : "is not"}`);
// Log true or false based on whether the word "is" exist in message or not
let word2 = "is";
console.log(`The word "${word2}" ${message.includes(word2) ? "is exist" : "is not"}`);
// Log true or false based on whether the word "Is" exist in message or not
let word3 = "is";
console.log(`The word "${word3}" ${message.includes(word3) ? "is exist" : "is not"}`);
// Check and log whether the word from index 3 to 6 is "you" or not (use slice)
console.log(message.slice(3,6));
// Check and log whether the word from index 7 to 8 is "a" or not
console.log(message.slice(7,8));
// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)
console.log(message.slice(-3));
// Check and log whether the last 5 character in message is "no!" or not
console.log(message.slice(-5));
// Log the message variable, all in lowecase
console.log(message.toLowerCase());
// Log the message variable, all in uppercase
console.log(message.toUpperCase());
// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.
let newMessage =  (message.replace("are","can't"))
console.log(newMessage);
// Replace the word "still" to "" (empty) using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
newMessage = (message.replace("thinking",""))
console.log(newMessage);
// Replace the word "thinking" to "decide" using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
newMessage = (message.replace("thinking","decide"));
console.log(newMessage);
// Log all the characters from the message variable (you can user for..of loop on string)
for(let character of message){
    
}
// Split all the words in message (split by " " space) and store it in a variable messageArray
let messageArray = message.split(" ")
// Log all the words of messageArray
console.log(messageArray);
