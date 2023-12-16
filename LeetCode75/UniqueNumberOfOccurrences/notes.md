# 1207. Unique Number of Occurrences

## The Problem

Given an array of integers `arr`, return `true` _if the number of occurrences of each value in the array is **unique** or_ `false` _otherwise_.

**Example 1:**

```
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
```

**Example 2:**

```
Input: arr = [1,2]
Output: false

```

**Example 3:**

```
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

```

**Constraints:**

-   `1 <= arr.length <= 1000`
-   `-1000 <= arr[i] <= 1000`


### My Initial Approach

I am thinking that I could possibly do maybe **some** of the work for this problem using less memory maybe with a constant. I am not sure how yet, without holding a reference to at least one variable to track unique occurrences.

Nevertheless, I will start by keeping a reference to each each unique number in the array via a **HashMap** and as I iterate through the array:

    1. If the current number doesnt exist in a map:
        * add it to the map with a value of 1.
    2. if it already exists in the map:
        * find its key, and increment its occurrence value.

I can then keep a set `uniqueOccurrences` to hold the **unique** values of the occurences of nums in the array.

I can then iterate through the map of occurrences for the nums in the array:

    1. If the occurrence (value) for the num (key) in the map is NOT found in the `uniqueOccurrences` set:
        * add it to the set for future reference
    2. Else if the occurence **IS** found in the set:
        * return `false` because this means that we have just verified a non-unique occurrence,
          and this means that not **ALL** occurrences are unique.
    3. We have iterated over the entire map: 
        return `true`, because we have not come accross a non-unique occurrence
        whilst iterating over the map.

### My Solution


**Time Complexity:** O(n), because if all numbers are unique, each occurrence is unique,
                 then both the map & set will store n numbers which will all need to be iterated over.

**Space Complexity:** O(n), because if all numbers are unique, each occurrence is unique,
                  then both the map & set will store n numbers.


```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let uniqueOccurrences = new Set();
    let map = new Map();
    for(num of arr) {
        // First occurrence of arr[num]
        if(!map.has(num)) {
            map.set(num, 1);
        }
        else {
            let value = map.get(num);
            map.set(num, value + 1);
        }
    };

    // Iterate over occurrence values in the map
    for(const [_, value] of map) {
        if(!uniqueOccurrences.has(value)) {
            uniqueOccurrences.add(value);
        }
        else {
            return false;
        }
    };

    return true;
};
```
### Alternative Solutions
