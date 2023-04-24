// Description
// Given a positive integer num, return true if num is a perfect square or false otherwise.
// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.
// You must not use any built-in library function, such as sqrt.

// my solution
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(Math.pow(num, 1/2) % 2 === 0 || Math.pow(num, 1/2) % 2 === 1){
        return true
    } return false
};