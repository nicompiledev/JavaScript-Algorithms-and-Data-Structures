const rangeOfNumbers = require('./recursion_range_numbers.js');

// Test case 1: startNum = 1, endNum = 5
console.log(rangeOfNumbers(1, 5)); // Expected output: [1, 2, 3, 4, 5]

// Test case 2: startNum = 3, endNum = 10
console.log(rangeOfNumbers(3, 10)); // Expected output: [3, 4, 5, 6, 7, 8, 9, 10]

// Test case 3: startNum = 0, endNum = 0
console.log(rangeOfNumbers(0, 0)); // Expected output: [0]

// Test case 4: startNum = -5, endNum = 5
console.log(rangeOfNumbers(-5, 5)); // Expected output: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
