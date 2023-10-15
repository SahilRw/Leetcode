// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
 
// my solution
var fourSum = function(nums, target) {
    // sorting the array in ascending order
    nums.sort((a, b) => a - b );
    // initializing and array to store the result
    const result = [];

    // (i < nums.length - 3) to ensure that there are min 4 values in the array
    for (let i = 0; i < nums.length - 3; i++){
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // (j < nums.length - 2) to ensure that there are min 4 values in the array 
        // as we start looping from i +1
        for (let j = i + 1; j < nums.length - 2; j++){
            if (j > i + 1 && nums[j]  === nums[j - 1]){
                continue;
            }

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]

                if (sum === target){
                    // pushing the values in array
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++
                    while (left < right && nums[right] === nums[right - 1]) right++

                    left++
                    right--
                // increment to increase the sum if sum is less than target
                } else if (sum < target){
                    left ++
                // decrement to decrease the sum if sum is greater than target
                } else {
                    right--
                }
               }
        }
    }

    return result;
};