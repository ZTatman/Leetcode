# 1637. Widest Vertical Area Between Two Points Containing No Points

Given `n` `points` on a 2D plane where `points[i] = [x<sub>i</sub>, y<sub>i</sub>]`, Return _the **widest vertical area** between two points such that no points are inside the area._

A **vertical area** is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The **widest vertical area** is the one with the maximum width.

Note that points **on the edge** of a vertical area **are not** considered included in the area.

### My Initial Approach


**Breakdown**

Ok, so this problem is a bit ambiguous at the first glance.
Lets try to break this down into something more digestible.

I am given an array points `points` that holds tuples of `(x, y)` coordinates that are represented on a graph. It important (later) to note that this points array isnt sorted at all.

The solution to this problem requires that I find the **greatest vertical area** between two points. Seems simple right? Why not just obviously choose the begining and end points in the points array, which gaurantees a maximum width? Well there is a catch. As stated above in the problem, I need to find the greatest vertical array such that there are **no other points mapped between the vertical area**. 

This means that I could very well choose the start point to be the point with the smallest `x` coordinate and the end point to be the one with the largest `y` coordinate, but there would **certainly** be other points within this range.

So how do we solve this?

**Brute Force**

Ideally Id not want to use this approach but if I had to, I could loop through the points array (**unsorted**) at each iteration choosing one point as my starting point, and then looping over the rest of the points in the array, with each point in this nested for loop serving as my end point.

For each end point I choose, I need to check in some way or another if this range I am looking at (start - end points) includes another point in it. If so, I need to choose another end point and repeat the process, otherwise I need to compare the current max vertical area to a total I will keep track of.

This would be a time complexity of O(n^2) work with nested for loops, not ideal.


**Alternative**

The alternative to the approach above is to sort the array by each points `x` coordinates first, and then loop through the array. 

In what way should I loop though? Well, with the points array sorted, it makes it easier to see which points exist in eath others range, but if thats the case, wont the greatest area always be the width of one starting point to the next ending point? I dont think so. What if we have:

`points = [[7, 4], [9, 7], [9, 9], [10, 11]]`

Either the width represented by `[[7, 4], [9, 7]]` or by `[[7, 4], [9, 9]]` could be considered to be the width that maximized the vertical area. I think I should loop through this array with a **two pointer** approach.

One start pointer `s` and one end pointer `e` with both placed at the respective ends of the sorted pointer array.

How do I check for points within the range efficiently?

Ok I think I am overthink this.... I dont actually think I need to use a **two pointer** approach here....
If I have a points array like so:

`points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]`
`sortedPoints = [[ 1, 0 ], [ 1, 4 ], [ 3, 1 ], [ 5, 3 ], [ 8, 8 ], [ 9, 0 ]]`

the restriction that was given to us actually makes things so much simpler. If I cant have any points that exist within the range of the greatest vertical area, then I can only look at **two points at a time** in this array because it **IS** sorted by the `x` coordinates of each point. This means that I can loop through the array in pairs of 2 and take the vertical area and compare it against the known maximum vertical area. At the end I just return the maximum vertical area.

### My Solution

Time complexity: O(n logn), javascript's sort() runtime is O(n logn) based off of quicksort.
Space complexity: O(n), because we need to store the sorted array. Maybe I could change the points array itself and then use that.

```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    if (points.length == 2) return Math.abs(points[0][0] - points[1][0]);
    let sortedPoints = points.sort((a, b) => a[0] - b[0]);
    let maxVerticalArea = 0;
    for(let i = 0; i < sortedPoints.length - 1; i++) {
        let verticalArea = sortedPoints[i+1][0] - sortedPoints[i][0];
        maxVerticalArea = Math.max(maxVerticalArea, verticalArea);
    }
    return maxVerticalArea;
};
```
