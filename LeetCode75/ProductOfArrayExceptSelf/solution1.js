// Time Complexity: O(n)
// Space Complexity: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = [];
    let prefix = [], postfix = [];
    console.log(`- nums: ${nums}`)

    // prefix products
    prefix[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
        console.log(`nums[${i}]: ${nums[i - 1]}, prefix[${i}]: ${prefix[i - 1]}`)
    };
    console.log(`- prefix: ${prefix}`)
 
    // postfix products
    postfix[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix[i] = postfix[i + 1] * nums[i + 1];
    };
    console.log(`- postfix: ${postfix}`)

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * postfix[i];
    };
    return result;
};
