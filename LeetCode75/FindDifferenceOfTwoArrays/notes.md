
# 2215. Find the Difference of Two Arrays

## The Problem

Given two **0-indexed** integer arrays `nums1` and `nums2`, return _a list_ `answer` _of size_ `2` _where:_

-   `answer[0]` _is a list of all **distinct** integers in_ `nums1` _which are **not** present in_ `nums2`_._
-   `answer[1]` _is a list of all **distinct** integers in_ `nums2` _which are **not** present in_ `nums1`.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

```
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
```

**Example 2:**

```
Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

```

**Constraints:**

-   `1 <= nums1.length, nums2.length <= 1000`
-   `-1000 <= nums1[i], nums2[i] <= 1000`

### My Initial Approach

I am thinking that I can create two `sets` of numbers to hold **unique** numbers of each number array.

I think I can also create two empty arrays to hold the results for each array.

I can traverse through each set one at a time (O(n) operations dont have to be done at the same time all at once) and check if the current number is in the other set.
If it is not, I will add the current number of the current set to the array corresponding to the other set and vice versa.

### My Solution

**Time Complexity**: O(n + m), because we iterate over both arrays in order to find the solution.

**Space Complexity**: O(n + m)??, `n` is length of array `nums1` and `m` is length of array `nums2`, all numbers in both arrays could be completley unique.

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let res1 = [], res2 = [];

    set1.forEach(x => {
        if (!set2.has(x)) {
            res1.push(x);
        }
    });

    set2.forEach(x => {
        if (!set1.has(x)) {
            res2.push(x);
        }
    });

    return [res1, res2];
}
```
**Time Complexity:** O(n +m), all numbers in 

### Alternative Solution

Instead of storing both arrays as sets, we can use one set of integers to determine where to store the numbers we look at, and do this work for both arrays.

This means that we would choose to store one array as a set of numbers to be compared against, and the other array of numbers to work on and add to a results array, and return that array as a sub-solution to be a part of the entire solution. 

Solving the problem this way, would require to function calls, with each return the result array of unique numbers not included in the other array.



For instance, lets look at example 1:

Input: `nums1 = [1,2,3]`, `nums2 =  [2,4,6]`
Output: `[[1,3],[4,6]]`

Using this example we store nums2 in a set, numsSet2 = [2, 4, 6].

Then we can iterate over nums1. At each number in nums1, we check if it
is in numsSet2.

* If `n` in `nums` is in `numsSet2`:
    * Skip this number
* If `n` is **NOT** in `numsSet2`:
    * Add `n` to the answer array

Once done iterating, return the answer array.

Repeat this work for nums2, storing nums1 as a set `setNums1` and iterating over nums2 and adding it to a result array.

Both these returned results can then be wrapped in another array as the final answer.






