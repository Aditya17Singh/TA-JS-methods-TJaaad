Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

  -Return: A new string representing the calling string converted to uppercase.
  -Example:
  ```js
  let sentence = "my name is aditya"
  sentence.toUpperCase(); // "MY NAME IS ADITYA"
  let sentence = "my name is arun"
  sentence.toUpperCase(); // "MY NAME IS ARUN"
  let sentence = "my name is arjun"
  sentence.toUpperCase(); // "MY NAME IS ARJUN"
  ```
3. `toLowerCase`
  -Example:
  ```js
  let sentence = "my name is ADITYA"
  sentence.toLowerCase(); // "my name is aditya"
  let sentence = "my name is ARUN"
  sentence.toLowerCase(); // "my name is arun"
  let sentence = "my name is ARJUN"
  sentence.toLowerCase(); // "my name is arjun"
  ```
4. `trim`
-Return value: A new string representing str stripped of whitespace from both its beginning and end.
-Example:
```js
let sentence = "  my name is ADITYA  "
  sentence.trim(); // "my name is ADITYA"
  let sentence = "  my name is ARUN  "
  sentence.trim(); // "my name is ARUN"
  let sentence = "  my name is ARJUN  "
  sentence.trim(); // "my name is ARJUN"
```
5. `trimEnd`
-Return value:A new string representing str stripped of whitespace from its end (right side).
-Example:
```js
let sentence = "  my name is ADITYA  "
  sentence.trimEnd(); // "  my name is ADITYA"
  let sentence = "  my name is ARUN  "
  sentence.trimEnd(); // "  my name is ARUN"
  let sentence = "  my name is ARJUN  "
  sentence.trimEnd(); // "  my name is ARJUN"
```
6. `trimStart`
-Return value:A new string representing str stripped of whitespace from its beginning (left side).
-Example:
```js
let sentence = "  my name is ADITYA  "
  sentence.trimStart(); // "my name is ADITYA  "
  let sentence = "  my name is ARUN  "
  sentence.trimStart(); // "my name is ARUN  "
  let sentence = "  my name is ARJUN  "
  sentence.trimStart(); // "my name is ARJUN  "
```
7. `concat`
 -parameter: One or more strings to concatenate to str.
 -Return value: A new string containing the combined text of the strings provided.
-Examples:
```js
let str1 = "Hello"
let str2 = "World"
console.log(str1.concat(' ', str2))// Hello World
```
8. `endsWith`
-parameter: The characters to be searched for at the end of str.
-Return value: true if the given characters are found at the end of the string; otherwise, false.
-Examples:
```js
let str1 = "best power is knowledge"
console.log(str1.endsWith("knowledge"))
 true
let str1 = "best power is knowledge"
console.log(str1.endsWith("knowledg"))
 false
```
9. `includes`
-parameter: A string to be searched for within str.
-Return value: true if the search string is found anywhere within the given string; otherwise, false if not.
-Examples:
```js
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
```

10. `indexOf`
-Return value:The index of the first occurrence of searchValue, or -1 if not found.
An empty string searchValue produces strange results. With no fromIndex value, or any fromIndex value lower than the string's length, the returned value is the same as the fromIndex value:
-Examples:
```js
let paragraph = "The quick brown fox jump over the lazy dog."
let searchTeam = "dog"
let indexOfFirst = paragraph.indexOf(searchTeam);
console.log(indexOfFirst);//39
```
11. `lastIndexOf`
-parameter: A string representing the value to search for. If searchValue is an empty string, then fromIndex is returned.
-Return value:The index of the last occurrence of searchValue; -1 if not found.
-Examples:
```js
let paragraph = "The quick brown fox jump over the lazy dog.dog"
let searchTeam = "dog"
let indexOfFirst = paragraph.lastIndexOf(searchTeam);
console.log(indexOfFirst);//43
```
12. `padEnd`
-parameter: targetLength
The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
padString Optional
The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).
-Return value:A String of the specified targetLength with the padString applied at the end of the current str.
-Examples:
```js
const str1 = 'Breaded Mushrooms';
console.log(str1.padEnd(25, '.'));
```
13. `padStart`
-parameter:targetLength
The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.
padString Optional
The string to pad the current str with. If padString is too long to stay within the targetLength, it will be truncated from the end. The default value is " " (U+0020 'SPACE').
-Return value:A String of the specified targetLength with padString applied from the start.
-Examples:
```js
const str1 = '5';
console.log(str1.padStart(2, '0'));
```
14. `repeat`
-parameteres:An integer between 0 and +Infinity, indicating the number of times to repeat the string.
-Return value:A new string containing the specified number of copies of the given string.
-Examples:
```js
const chorus = 'Because I\'m happy. ';
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
```
15. `replace`
-parameters:regexp (pattern)
A RegExp object or literal. The match or matches are replaced with newSubstr or the value returned by the specified replacerFunction.
substr
A String that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression. Only the first occurrence will be replaced.
-Return value:A new string, with some or all matches of a pattern replaced by a replacement.
-Examples:
```js
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));//"The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
```
16. `slice`
-parameters:beginIndex
The zero-based index at which to begin extraction. If negative, it is treated as str.length + beginIndex. (For example, if beginIndex is -3, it is treated as str.length - 3.) If beginIndex is not a number after Number(beginIndex), it is treated as 0.

If beginIndex is greater than or equal to str.length, an empty string is returned.

endIndex Optional
The zero-based index before which to end extraction. The character at this index will not be included.

If endIndex is omitted or undefined, or greater than str.length, slice() extracts to the end of the string. If negative, it is treated as str.length + endIndex. (For example, if endIndex is -3, it is treated as str.length - 3.) If it is not undefined, and Number(endIndex) is not positive, an empty string is returned.

If endIndex is specified, endIndex should be greater than beginIndex, otherwise an empty string is returned. (For example, slice(-3, 0), slice(-1, -3), or slice(3, 1) returns "".)
-Return value:A new string containing the extracted section of the string.
```js
let str = "my name is aditya"
console.log(str.slice(4));
// ame is aditya
let str = "my name is aditya"
console.log(str.slice(7));
//is aditya
```
17. `split`
-parameteres:The pattern describing where each split should occur.  The separator can be a simple string or it can be a regular expression.

The simplest case is when separator is just a single character; this is used to split a delimited string.  For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like this: myString.split("\t").
If separator contains multiple characters, that entire character sequence must be found in order to split.
If separator is omitted or does not occur in str, the returned array contains one element consisting of the entire string.
If separator appears at the beginning (or end) of the string, it still has the effect of splitting.  The result is an empty (i.e. zero length) string, which appears at the first (or last) position of the returned array.
If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".
-Return value:An Array of strings, split at each point where the separator occurs in the given string.
```js
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]);
```
18. `substring`
-paramteres: indexStart
The index of the first character to include in the returned substring.
indexEnd Optional
The index of the first character to exclude from the returned substring.
-Return value: A new string containing the specified part of the given string.
```js
const str = 'Mozilla';
console.log(str.substring(1, 3));
```
