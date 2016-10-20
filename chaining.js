var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Using one single line of JavaScript code, complete the following tasks on the array of integers below.
console.log("original", integers);

// Sort the numbers in descending order (10, 9, 8, 7, etc).
var output = integers.sort(function(a,b){return b-a})
// Remove any integers greater than 19.
.filter(function(num){return num <= 19})
// Multiply each remaining number by 1.5 and then subtract 1.
.map(function(num){return ((num * 1.5) - 1)})
// Then output (either in the DOM or the console) the sum of all the resulting numbers.
.reduce(function(prev, curr){return prev + curr});
console.log("ouput: ", output);