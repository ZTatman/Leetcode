# 283. Move Zeroes

1. [The Problem](#the-problem)
2. [Initial Approach](#initial-approach)
3. [Alternative Solutions](#alternative-solutions)
## The Problem

Given an integer array ```nums```, move all ```0```'s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this **in-place** without making a copy of the array.

**Example 1**:  

Input: ```nums = [1,0,3,12]```  
Output: ```[1,3,12,0,0]```  

**Example 2**:  

Input: ```nums = [0]```
Output: ```[0]```


## Initial Approach

Since this problem is under the **Two Pointers** category, I know that I need to use two pointers to solve this problem. 

I am thinking I can have a pointer ```a``` and ```b```, where ```a``` starts at index 0 and ```b``` starts at the index of the last element in the array. 


let i = 0, j = nums.length - 1

[0,1,0,3,12]
         i   j
* switch nums[i] and nums[j], decrement i, increment j:
[0,1,3,0,12]
...
...
... haivng trouble with fleshing out a clever solution with two pointers, so I peeked at the intuition an easy and straight forward optimal complexity solution O(1). 

## Alternative Solutions
**Snowball Method**   
**Time Complexity**: O(n). One pass through array.  
**Space Complexity**: O(1). Operations to array are in-place.
```javascript
    /**
    * @param {number[]} nums
    * @return {void} Do not return anything, modify nums in-place instead.
    */
    var moveZeroes = function(nums) {
        let snowballSize = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) snowballSize++;
            else if (snowballSize > 0) {    
                nums[i-snowballSize] = nums[i];
                nums[i] = 0;
            }
        }
    };
```
