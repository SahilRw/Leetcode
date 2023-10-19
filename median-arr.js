// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// my solution
var findMedianSortedArrays = function(nums1, nums2) {
    const mergeArr = [...nums1, ...nums2]
    const sortArr = mergeArr.sort((a, b) => a - b)
    const lenOfArr = sortArr.length;

    if (lenOfArr % 2 === 0){
        const mid1 = sortArr[lenOfArr / 2 - 1]
        const mid2 = sortArr[lenOfArr / 2]
        return (mid1 + mid2)/ 2;
    } else {
        return sortArr[Math.floor(lenOfArr / 2)]
    }
};