/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let n = nums.length;
    if (n < 3) return false

    leftMin = [];
    leftMin[0] = nums[0];
    for(let i = 1; i < n; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], nums[i]);
    }

    rightMax = [];
    rightMax[n - 1] = nums[n - 1];
    for(let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(nums[i], rightMax[i + 1]);
    }

    for(let i = 0; i < n; i++) {
        if(leftMin[i] < nums[i] && nums[i] < rightMax[i]) return true;
    }

    console.log(`left: ${[leftMin]}, right: ${[rightMax]}`)
    return false;
};
