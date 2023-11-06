// Time Complexity: O(n)
// Space Complexity: O(1), no arrays are used to hold prefix and postfix results.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = [];
    // console.log(`- nums: ${nums}`);

    // prefix products
    result[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    };
 
    // postfix products
    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        // console.log(`- curr result[${i}]: ${result[i]}, curr postfix: ${postfix}, next postfix: ${postfix} x ${nums[i]} = ${postfix * nums[i]}`)
        result[i] = result[i] * postfix;
        postfix *= nums[i];
    };
    // console.log(`- final result: [${result}]`)
    return result;
};
