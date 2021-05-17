Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
-Parameter: Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
-Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
-Examples:
```js
let elements = ["fire","air","water"]
console.log(elements.join());//fire,air,water
let a = ["air","water","fire"]
a.join()
"air,water,fire"
a.join(",")
"air,water,fire"
a.join("")
"airwaterfire"
a.join("+")
"air+water+fire"
a.join(" + ")
"air + water + fire"
```
`join` 
-The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

3. `flat`

4. `push`
-Parameter:elementN
The element(s) to add to the end of the array.
-Return:The new length property of the object upon which the method was called.
-Examples:
```js
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
```
`push`
The push() method adds one or more elements to the end of an array and returns the new length of the array

5. `indexOf`
-Parameter:searchElement
Element to locate in the array.
fromIndex Optional
The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).
-Return:The first index of the element in the array; -1 if not found.
-Examples:
```js
let beasts = ["ant", "camel", "goat"]
console.log(beasts.indexOf("camel"))
//1
```
6. `lastIndexOf`
-parameter: searchElement
Element to locate in the array.
fromIndex Optional
The index at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.
-Return value :  The last index of the element in the array; -1 if not found.
-Examples:
```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));// 3
```
`lastIndexOf`- The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

7. `includes`
-parameter:The value to search for.
-Return value : A Boolean which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

Values of zero are all considered to be equal, regardless of sign. (That is, -0 is considered to be equal to both 0 and +0), but false is not considered to be the same as 0.

-Example:
```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));//true
```
`includes`
-The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
8. `reverse`
-Return value: The reversed array.
-Example:
```js
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
const reversed = array1.reverse();
console.log('reversed:', reversed);
//"reversed:" Array ["three", "two", "one"]
```
`reverse`
-The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

9. `every`
-parameter: callbackFn
A function to test for each element, taking three arguments:
element
The current element being processed in the array.
index Optional
The index of the current element being processed in the array.
array Optional
The array every was called upon.
thisArg Optional
A value to use as this when executing callbackFn.
-Return value:true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
-Example:
```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));// true
```
`every`
-The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.


10. `shift`
-Return value: The removed element from the array; undefined if the array is empty.
-Example: 
```js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);// Array [2, 3]
```
`shift`
-The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

11. `splice`
-parameter:start
The index at which to start changing the array.

If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many element as item[n*] provided.

If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If array.length + start is less than 0, it will begin from index 0.
-Return value:An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.
-Example:
```js
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]

```
`splice`
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`
