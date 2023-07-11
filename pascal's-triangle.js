// Description:
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

// Constraints:
// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [];

  for (let row = 0; row < numRows; row++) {
    const currRow = [];

    // first and last element are always 1 in pascal triangle
    currRow[0] = 1;
    currRow[row] = 1;

    for (let i = 1; i < row; i++) {
      currRow[i] = triangle[row - 1][i - 1] + triangle[row - 1][i];
    }
    triangle.push(currRow);
  }

  return triangle;
};
