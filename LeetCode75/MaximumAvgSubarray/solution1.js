/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if (nums.length === 1) return nums[0] / k;
  let length = nums.length;
  let subLength = length - (length - k);
  let maxAvg = Number.NEGATIVE_INFINITY;
  for (let i = 0; i <= length - k; i++) {
    let avg = 0;
    for (let j = i; j < subLength + i; j++) {
      avg += nums[j];
    }
    avg /= k;
    if (avg >= maxAvg) {
      maxAvg = avg;
    }
  }
  return maxAvg;
};
