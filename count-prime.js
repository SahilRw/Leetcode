// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// Input: n = 0
// Output: 0

// Example 3:
// Input: n = 1
// Output: 0

// my solution
var countPrimes = function(n) {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i+= 6){
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    let count = 0;
    for (let i = 2; i < n; i++){
        if(isPrime(i)){
            count++
        }
    }
    return count
};