
# 11. Container With Most Water

## The Problem

You are given an integer array length `n` where each element represents a vertical bar of height `h`. 

[...]. All pairs of the `n` lines define a rectangle with a height `h` given by the shorter line and a width `w` given by the distance between the lines. Return the **area of the rectangle with the largest area**.

### My Initial Approach

**The Breakdown**

I am thinking that I can start with pointer `i` at the starting index of the array and `j` at the ending index of the array.

The width `w` of each container must be re-calculated on each pointer being moved, and is the distance from pointer `i` to pointer `j`.

The height `h` of each container must also be recalculated on each pointer being moved, and is the *minimum value* of the two elements at pointer `i` and pointer `j`.
This is because water can only be contained up to the vertical bar with the smaller height.

**Things to note**:
* Starting from each end, the width `w` is the greatest it will ever be. knowing this, we can come to the conclusion that the max Area then depends on the minimum height fo the two vertical bars being compared.
* Area is defined as Width X Height, or, Area = w * h.
* As each pointer is moved inwards, the width `w` will decrease. This means that the newly calculated area for each container will decrease because it is directly related to the width.
* So how are we supposed to find the max area if we lose area after each iteration?
* Well we cannot change the fact that width will decrease but we can keep the height at its heighest value possible.
* If we compare the left and right pointers to each other, the min of the two is the one that determines the greatest area possible. 
* **On each iteration we compare the pointers heights to each other and move the pointer inward that is the lesser of the two.**
	* The intuition behind this and what I didn't understand earlier on is that by doing this we pick the more possibly optimal solution. The likelihood that we come across a vertical bar with a greater height is greater if we move the pointer of the smaller vertical bar inward rather than the greater one. By doing this, although we decrease width each time, we could possibly compensate the difference in width with a vertical bar of greater height.
* Finally, this works because **we are keeping track of the max Area** we have found already. So, if we come across the container with the most Area, we will keep track of it and it will remain the max Area if we find an even greater Area.

### My Solution

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length - 1;
    let maxArea = 0;
    while(l < r) {
        let left = height[l], right = height[r];
        let area = Math.min(height[l], height[r]) * (r-l);
        maxArea = Math.max(maxArea, area);
        if(height[l] < height[r]) {
            left++;
        }
        else {
            right--;
        }
    };
    return maxArea;
};
```
