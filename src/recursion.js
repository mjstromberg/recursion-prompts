// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
	return n < 0 ? null : n === 0 ? 1 : n * factorial(n - 1);
};


// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
	if (array.length === 0) return 0;
	if (array.length === 1) return array[0];
	return array[array.length - 1] + sum(array.slice(0, -1));
};


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(arr) {
	if (Array.isArray(arr)) {
		if (arr.length === 0) return 0;
		if (arr.length === 1) return arraySum(arr[0]);
		return arraySum(arr[arr.length - 1]) + arraySum(arr.slice(0, -1));
	}
	return arr;
};


// 4. Check whether a number is even or not.
var isEven = function(n) {
	
};


// 5. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
	var result = [];
	
	if (Math.abs(x - y) <= 1) return result;
	if (Math.ceil(x) < y) return result.concat(Math.ceil(x) + 1, range(Math.ceil(x) + 1, y));
	else return result.concat(Math.ceil(x) - 1, range(Math.ceil(x) - 1, y));
};


// 6. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if (exp === 0) return 1;
  if (exp === 1) return base;
	if (exp < 0)   return Number((1 / base * exponent(base, exp + 1)).toFixed(5));
	return base * exponent(base, exp - 1);
};


// 7. Write a function that accepts a string a reverses it.
var reverse = function(string) {
	if (string.length === 0) return '';
	if (string.length === 1) return string;
  return string.charAt(string.length - 1) + reverse(string.slice(0, -1));
};


// 8. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {

};


// 9. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if (y === 0) return NaN;
	if (x === 0) return 0;
	else {
		if (x > 0) {
			if (y > 0) {
				if (x < y) return x;
				return modulo(x - y, y);
			} else {
				if (x < -y) return -x;
				return modulo(x + y, y);
			}
		} else {
			if (y > 0) {
				if (-x < y) return x;
				return modulo(x + y, y);
			} else {
				if (-x < -y) return x;
				return modulo(x - y, y);
			}
		}
	}
};


// 10. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
	if (x === 0 || y === 0) return 0;
	if (y === 1 || y === -1) return y === 1 ? x : -x;
	else {
		if (x > 0) {
			if (y > 0) return x + multiply(x, y - 1);
			return -x + multiply(x, y + 1);
		} else {
			if (y > 0) return x + multiply(x, y - 1);
			return -x + multiply(x, y + 1);
		}
	}
};


// 11. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
	
};


// 12. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	
};


// 13. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if (str1.length !== str2.length) return false;
	if (str1.length === 0) return true;
	else {
		if (str1.charAt(str1.length - 1) === str2.charAt(str2.length - 1)) {
			return compareStr(str1.slice(0, -1), str2.slice(0, -1));
		} else {
			return false;
		}
	}
};


// 14. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
	var result = [];
	
	if (str.length === 0) return result;
	return result.concat(str.charAt(0), createArray(str.slice(1)));
};


// 15. Reverse the order of an array
var reverseArr = function (array) {
	var result = [];
	
	if (array.length === 0) return result;
	return result.concat(array[array.length - 1], reverseArr(array.slice(0, -1)));	
};


// 16. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	var result = [];

	if (length === 0) return result;
	return result.concat([value], buildList(value, length - 1));
};


// 17. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	var count = 0;
	var countRecurse = function(arr, val) {
		if (arr.length === 0) {
			return count;
		} else if (arr.length === 1) {
			return count = arr[0] === val ? count++ : count;
		} else {
			count = arr[arr.length - 1] === val ? count++ : count;
			return countRecurse(arr.slice(0, -1), val);
		}
	}
	
	countRecurse(array, value);
	return count;
};


// 18. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {

};


// 19. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {

};


// 20. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {

};


// 21. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {

};


// 22. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {

};


// 23. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {

};


// 24. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {

};


// 25. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {

};


// 26. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {

};


// 27. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {

};


// 28. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {

};


// 29. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {

};


// 30. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {

};


// 31. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {

};



// *** EXTRA CREDIT ***

// 32. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {

};


// 33. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {

};


// 34. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {

};
