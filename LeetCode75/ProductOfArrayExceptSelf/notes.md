# 238. Product of Array Except Self

## The Problem

Given an integer array `nums`, return _an array_ `answer` _such that_ `answer[i]` _is equal to the product of all the elements of_ `nums` _except_ `nums[i]`.
  
The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.
  
You must write an algorithm that runs in `O(n)` time and without using the division operation.

**Example 1:**
  
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

```

**Example 2:**
  
```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

```

**Constraints:**
  
-   `2 <= nums.length <= 10<sup>5</sup>`
-   `-30 <= nums[i] <= 30`
-   The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.
  
**Follow up:** Can you solve the problem in `O(1)` extra space complexity? (The output array **does not** count as extra space for space complexity analysis.)

### Solution

From the looks of it, this seems like a simple enough problem to solve in linear time and space. We can simply take the product of all the elements in the given array and then, for each of the elements `x` of the array, we can simply find `product of array except self` value by dividing the product by `x`.
  
Doing this for each of the elements would solve the problem. However, there's a note in the problem which says that **we are not allowed to use division operation**. That makes solving this problem a bit harder.

#### Approach 1: Left and Right product lists

It's much easier to build an intuition for solving this problem without division once you visualize how the different `products except self` look like for each of the elements. So, let's take a look at an example array and the different products.
  
![example](https://leetcode.com/problems/product-of-array-except-self/Figures/238/diag-1.png)
  
Looking at the figure about we can figure another way of computing those different product values.
  
> Instead of dividing the product of all the numbers in the array by the number at a given index to get the corresponding product, we can make use of the product of all the numbers to the left and all the numbers to the right of the index. Multiplying these two individual products would give us the desired result as well.
  
For every given index, `i`, we will make use of the product of all the numbers to the left of it and multiply it by the product of all the numbers to the right. This will give us the product of all the numbers except the one at the given index `i`. Let's look at a formal algorithm describing this idea more concretely.

**Algorithm**
  
1.  Initialize two empty arrays, `L` and `R` where for a given index `i`, `L[i]` would contain the product of all the numbers to the left of `i` and `R[i]` would contain the product of all the numbers to the right of `i`.
2.  We would need two different loops to fill in values for the two arrays. For the array `L`, `L[0]` would be `1` since there are no elements to the left of the first element.
    For the rest of the elements, we simply use `L[i]` = `L[i−1]` ∗  `nums[i−1]` = `L[i−1]` * `nums[i-1]`. Remember that `L[i]` represents product of all the elements _to the left of element at index i_.
3.  For the other array, we do the same thing but in reverse i.e. we start with the initial value of `1` in R\[length−1\]R\[length - 1\]R\[length−1\] where lengthlengthlength is the number of elements in the array, and keep updating `R[i]` in reverse. Essentially, R\[i\]=R\[i+1\]∗nums\[i+1\]R\[i\] = R\[i + 1\] \* nums\[i + 1\]R\[i\]\=R\[i+1\]∗nums\[i+1\]. Remember that `R[i]` represents product of all the elements _to the right of element at index i_.
4.  Once we have the two arrays set up properly, we simply iterate over the input array one element at a time, and for each element at index `i`, we find the `product except self` as L\[i\]∗R\[i\]L\[i\] \* R\[i\]L\[i\]∗R\[i\].

Let's go over a simple run of the algorithm that clearly depicts the construction of the two intermediate arrays and finally the answer array.
  
**Visual Example**
//TODO ADD ONE HERE

For the given array \[4,5,1,8,2\], the `L` and `R` arrays would finally be:
  
![example-2](https://leetcode.com/problems/product-of-array-except-self/Figures/238/products.png)


#### Solution 1
```javascript
// Time Complexity: O(n)
// Space Complexity: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = [];
    let prefix = [], postfix = [];

    // prefix products
    prefix[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    };
 
    // postfix products
    postfix[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix[i] = postfix[i + 1] * nums[i + 1];
    };

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * postfix[i];
    };
    return result;
};
```
