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
