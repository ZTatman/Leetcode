// Sliding window
// Time Complexity: O(n)
// Space Complexity: O(1);

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if(nums.length === 1) return nums[0];
  let currSum = 0;

  for(let i = 0; i < k; i++) {
    currSum += nums[i];
  }
  let maxSum = currSum;

  for(let i = k; i < nums.length; i++) {
    currSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum / k;
};

