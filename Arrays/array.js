/** Array JavaScript implementations */
const arrayNumbers = [10, 1005, 2589, 14, 2541, 5698]
var fruits = ["Banana", "Orange", "Apple", "Mango"];

/** Find Minimum and Maximum values in an Array */

const arrayMax = arrayNumbers.reduce((a, b) => {
	return Math.max(a, b)
})	

const arrayMin = arrayNumbers.reduce((a, b) => {
	return Math.min(a, b)
})

console.log("Maximum value in array ", arrayNumbers, " is ", arrayMax);
console.log("Minimum value in array ", arrayNumbers, " is ", arrayMin);

//-------------------------
console.log('_________________________________________________________________________________________________');
console.log(' ')
//-------------------------

/** Array Sorting (Numeric) */

console.log("Array in ascending order", arrayNumbers.sort((a, b) => a - b))
console.log("Array in descending order", arrayNumbers.sort((a, b) => b - a))

/** Array Sorting (Alphabetical) */

console.log("Ascending", fruits.sort())
console.log("descending", fruits.reverse())