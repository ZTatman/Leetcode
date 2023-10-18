# 392. Is Subsequence

* [The Problem](#the-problem)
* [Initial Approach](#initial-approach)
## The Problem

Given two strings ```s``` and ```t```, return ```true``` if s is a subsequence of ```t```, or ```false``` otherwise.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

**Example 1**:

Input: s = "abc", t = "ahbgdc"
Output: true  

**Example 2**:

Input: s = "axc", t = "ahbgdc"
Output: false
 

**Constraints**:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming ```s```, say ```s1, s2, ..., sk where k >= 109```, and you want to check one by one to see if ```t``` has its subsequence. In this scenario, how would you change your code?

## Initial Approach

My first intuition is to use **Two Pointers** method to keep track of the chars being compared against each other in string ```s``` and ```t```.  
  

```i``` = ```0```, ```s``` = ```[a, b, c]```  
```j``` = ```0```, ```t``` = ```[a, h, b, g, d, c]```

**Process**  
  
| i | j | $s^i$ | $t^j$ | $s^i$ = $t^j$ | action   | result |
|---|---|-------|-------|-----------|----------|--------|
| 0 | 0 | "a"   | "a"   | true      | i++, j++ | "a"    |
| 1 | 1 | "b"   | "h"   | false     | j++      | "a"    |
| 1 | 2 | "b"   | "b"   | true      | i++, j++ | "ab"   |
| 2 | 3 | "c"   | "g"   | false     | j++      | "ab"   |
| 2 | 4 | "c"   | "d"   | false     | j++      | "ab"   |
| 2 | 5 | "c"   | "c"   | true      | i++, j++ | "abc"  |

* For every char s~i that is equal to t~j, add append s~j to the string ```result``` = "".
* If at the end of the loop, ``s~j.length === result.length``, then return true, otherwise return false

## My Solution
**Two Pointers**  

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let result = "";
    let i = 0, j = 0;

    while(i < s.length && j < t.length) {
      if(s[i] === t[j]) {
        result += s[i++];
        j++;
      }
      else {
        j++;
      }
    }

    return result.length === s.length;
};
```
Time Complexity: O(m+n).  
Space Complexity: O(m). The result string is stored, with a worst case scenario length of m.

**Optimized**

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let result = "";
    let i = 0, j = 0;

    while(s.length > 0 && j < t.length) {
      if(s[i] === t[j]) {
        s = s.slice(0, i) + s.slice(i+1, s.length);
      }
        j++;
    }

    return s.length === 0;
};
```
Time Complexity: O(m+n).  
Space Complexity: O(1). There is no result string stored.

