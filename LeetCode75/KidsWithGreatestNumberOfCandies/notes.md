# 1431. Kids With the Greatest Number of Candies

## The Problem

There are ```n``` kids with candies. You are given an integer array ```candies```, where each ```candies[i]``` represents the number of candies the ```ith``` kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array ```result``` of length ```n```, where ```result[i]``` is ```true``` if, after giving the ith kid all the extraCandies, they will have the **greatest** number of candies among all the kids, or ```false``` otherwise.

Note that **multiple** kids can have the greatest number of candies.


## Initial Approach:

**Things to Note**:  
Multiple kids can have the **greatest number of candies**, which means if a kid has the same amount of candies (given the extra candies) as another who has the original highest amount starting out, that they also have the highest amount. Basically, we need to know the highest number of candies that any kid in the array has. 

How do I calculate this though? If I had to pick a worst case time complexity I would want it to be O(n) for finding the *highest number of candies* (```maxCandies```). 

**Sliding windows**?  
Given one pointer starting at the start of array and another at the end of the array, I could assign ```maxCandies``` to be the greatest number of candies between the two current kids. If either kid being compared has the bigger amount of candies, compare it to the current ```maxCandies``` and then move the pointer of the kid who lost the comparison one index inward. repeat this until either ```l``` or ```r``` is greater than the other.

**How do I compare**?? 

Naive: double for loop O(n)
This seems easy enough right? Once we have current highest maxCandies to start with from above, we can loop through each element in array, and compare maxCandies amongst all kids to each kids candies + the extraCandies.

### My Solution

```javascript
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 // Time Complexity: O(n)
 // Space Complexity: O(1)
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = 0;
    let l = 0, r = candies.length - 1;
    while(r > l || l < r) {
        if(candies[r] > candies[l]){
            maxCandies = candies[r];
            l++;
        }
        else {
            maxCandies = candies[l];
            r--;
        }
    }
    return candies.map(candy => (candy + extraCandies) >= maxCandies);
};
```
