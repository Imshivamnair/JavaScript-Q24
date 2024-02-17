# JavaScript-Q24
Write a JavaScript function that checks whether a number is perfect.

// Define a function named is_perfect that checks if a given number is a perfect number
function is_perfect(number) {
  // Initialize a variable temp to store the sum of factors
  var temp = 0;

  // Iterate through numbers from 1 to half of the input number to find factors
  for (var i = 1; i <= number / 2; i++) {
    // Check if i is a factor of the input number
    if (number % i === 0) {
      // If i is a factor, add it to the sum
      temp += i;
    }
  }

  // Check if the sum of factors is equal to the original number and not zero
  if (temp === number && temp !== 0) {
    // If true, log that it is a perfect number
    console.log("It is a perfect number.");
  } else {
    // If false, log that it is not a perfect number
    console.log("It is not a perfect number.");
  }
}

// Call the is_perfect function with the input number 28
is_perfect(28); 

**Sample Output:**

It is a perfect number.
Solution-2:

function isPerfectNumber(number) {
    if (number <= 0) {
        return false; // Perfect numbers are positive integers
    }

    let sum = 1; // Initialize sum with 1 (since 1 is always a divisor)

    // Iterate through potential divisors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;
            // If the divisor is not the square root, add its pair (number / i)
            if (i !== number / i) {
                sum += number / i;
            }
        }
    }

    // Check if the sum of divisors equals the original number
    return sum === number;
}

// Example usage:
console.log(isPerfectNumber(28)); // Output: true (28 is a perfect number)
console.log(isPerfectNumber(6));  // Output: true (6 is a perfect number)
console.log(isPerfectNumber(12)); // Output: false (12 is not a perfect number)

**Sample Output:**

true
true
false
