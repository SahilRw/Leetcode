// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// my solution
var merge = function(intervals) {
    if (intervals.length <= 1){
        return intervals
    }

    // sort intervals based on start time
    intervals.sort((a, b) => a[0] - b[0]);

    // merge overlapping intervals
    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++){
        const currInterval = intervals[i];
        const lastMergedInterval = result[result.length - 1];

        if (currInterval[0] <= lastMergedInterval[1]){
            // merge overlapping
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currInterval[1])
        } else {
            // non-overlapping interval, add it to the result
            result.push(currInterval)
        }
    }
    return result;
};