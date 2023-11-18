# 334. Increasing Triplet Subsequence


## The Problem

Given an integer array `nums`, return `true` _if there exists a triple of indices_ `(i, j, k)` _such that_ `i < j < k` _and_ `nums[i] < nums[j] < nums[k]`. If no such indices exists, return `false`.
  
**Example 1:**
  
```
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

```

**Example 2:**
  
```
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

```
  
**Example 3:**
  
```
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

```
  
**Constraints:**
  
-   `1 <= nums.length <= 5 * 10<sup>5</sup>`
-   `-2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1`
  
**Follow up:** Could you implement a solution that runs in `O(n)` time complexity and `O(1)` space complexity?
  
### My Initial Approach

**The Breakdown**
  
I am thinking I can iterate through the array once over and find the answer if it exists.
My first thought is to keep track of 3 variables `first`, `second`, `third` to keep track of the numbers at indeces `i`, `j`, `k`. 
  
First I want to find `first` number at index 'i', then I look at the `second` number at index `j`. 
if `first` is less than `second`, look for `third` number, and compare if `second` is less than `third`, if so return true.
  
If `second` is not less than `third`,  move second to next number until reaching the end of array.
Do the same for `first` number until reaching the end of the array.

### My Solution

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length === 1 || nums.length === 2) return false;

    let first = false;
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] < nums[i + 1]) {
            first = i;
            console.log('first: ', first)
            break;
        };
    };

    let second = false;
    for(let j = first; j < nums.length; j++) {
        if(nums[first] < nums[j]) {
            second = j;
            console.log('second: ', second)
            break;
        };
    };

    let third = false;
    for(let k = second; k < nums.length; k++) {
        if(nums[second] < nums[k]) {
            third = k;
            console.log('third: ', third)
            break;
        };
    };
    return (first === 0 ? true : first) && second && third;
};
```

The approach passes the first 3 testcases but fails to consider the edge case where you come accross a first number < second number and then all the rest of numbers are smaller than second number like so:

`[20,100,10,12,5,13]`

This is an issue because `10, 12, 13` is the answer here but the output of my code above is,
`20, 100, ....false` so it returs false.

### Solution 1

**Left Min Array & Right Max Array**

The way this approach works is to to keep in memory 2 arrays.

**Left Min Array**

We start to iterate through nums array (starting at index 1)and at each step, we store the min of the elements to the left of the current index.

`Math.min(leftMin[i - 1], nums[i])`

This produces an array of the current left minimum at each index in nums\[i] 

**Right Max Array**

We start to iterate backwards through nums array (starting at index nums.length - 1) and at each step, we store the max of the elements to right of the current index.

`Math.max(nums[i], rightMax[i + 1])`

Now that we have our arrays, we iterate through the original nums array from left to right. At each step we compare leftMin(i), nums\[i], and rightMax\[i]. 

If at any point `leftMin\[i] < nums\[i]  && nums\[i] < rightMax[i]` return true, otherwise return false at the end of the function.

```javascript
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
```

**Time Complexity**: 0(n)  
**Space Complexity**: O(n)
