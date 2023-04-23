// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

// my solution
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = `${x}`
    const reverseStr = Number(str.split('').reverse().join(''));
    return (x === reverseStr)? true : false;
}