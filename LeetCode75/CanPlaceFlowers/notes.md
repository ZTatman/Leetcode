# 605. Can Place Flowers

## The Problem

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** (next to other) plots.

Given an integer array ```flowerbed``` containing 0's and 1's, where ```0``` means *empty* and ```1``` means *not empty*, and an integer n,
return ```true``` if ```n``` new flowers can be planted in the flowerbed without violating the **no-adjacent-flowers** rule and ```false``` otherwise.

**Example 1**:  

    Input: flowerbed = [1,0,0,0,1], n = 1  
    Output: true

**Example 2**:  

    Input: flowerbed = [1,0,0,0,1], n = 2  
    Output: false


### Breakdown

**What is Given**:
* ```flowerbed``` of flowers containing ```0```'s and ```1```'s
  * ```0``` means **empty** (no flower planted there)
  * ```1``` means **occupied** (flower is planted there)
* ```n``` new flowers

**Goal**:  
Given ```n``` flowers and a ```flowerbed```, determine whether or not **ALL** ```n``` new flowers can be planted in the ```flowerbed``` also given the condition that:  
* flowers cannot be planted in **adjacent** plots.


### Initial Approach

**Brute Force**?  
I am thinking that I could loop through the array of 0s and 1s, and for each plot, check the plot *before* the current plot (if it is exists) and the plot *after* the current plot.  
  
* At the current index, if there exists a flower in either plot before or after the current one, it cannot be planted.

1. Check if n > 0, (stop looping until reaching end of array)

2. Is current plot *occupied*
	* yes? -> continue
	*  no?
		* Check if there exists ```prev``` plot and ```next``` plot.
		* (```fb[prev]``` || ```fb[next]```)? -> cotinue
		* otherwise:
			* plant at current plot ```fb[i]```, decrement n
			* repeat 1.

3. At end of loop, if ```n``` is 0, return ```true``` else return ```false```


**Sliding Windows**?


**Recursion**?

### My Solution

#### Brute Force
**Time Complexity**: O(n). Single scan of ```flowerbed```.  
**Space Complexity**:  O(1). Constant extra space is used.  

```javascript
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0 && flowerbed.length >= 1) return true;

    for(let i = 0; i < flowerbed.length; i++) {
        if (n === 0) break;
        if (flowerbed[i]) continue;
        const prev = i - 1, next = i + 1;

        // Check if either prev or next is occupied
        if (flowerbed[prev] || flowerbed[next]) continue;
        else {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n === 0 ? true : false;
};
```

**Rewritten / simplified**  
```javascript
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0 && flowerbed.length >= 1) return true;

    for(let i = 0; i < flowerbed.length; i++) {
        const prev = i - 1;
        const next = i + 1;
        // Check if either prev or next is occupied
        if (!flowerbed[prev] && !flowerbed[next] && !flowerbed[i]) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0 ? true : false;
};
```

### 


