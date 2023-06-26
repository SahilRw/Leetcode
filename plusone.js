// Description:

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// my solution:
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let digit = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + digit;
    digits[i] = sum % 10;
    digit = Math.floor(sum / 10);
  }

  if (digit === 1) {
    digits.unshift(1);
  }
  return digits;
};
