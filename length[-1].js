// Description:
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// my solution
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length
};