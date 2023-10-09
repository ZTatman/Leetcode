
# 1071. Greatest Common Divisor of Strings


## Summary


For two strings ```s``` and ```t```,  **t divides into s** if and only if and only if, 
```s = t + ... + t```, or in english, if ```s``` is the sum of some number of  *n* ```t```'s.

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

---

**Example 1**:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

**Example 2**:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

**Example 3**:

Input: str1 = "LEET", str2 = "CODE"
Output: ""

**Example 4**:

Input: str1 = "ABAB", str2 = "ABC"
Output: "AB"


## Initial Approach:

**Notes**  

1. It seems that all accepted words are the longest commonly words between str1 and str2.
2. It seems that if str1 and str2 are a repetition of the same set of characters, the longest commonly shared substring shared between the two is the set of those shared characters, like in example 1 and 2.
3. In example 3, order of the string seems to matter. Both str1 and str2 have the letter "E" in them, but the output is an empty string "".
4. Because of 3, there must be more than 1 character in common for output to be non-empty string.

**Brute Force**  
My initial thoughts are to use a nested for loop where the outer loop traverses the longer string, and the inner one traverses the shorter string
and compore each letter of the shorter string with each letter of the longer string. If there is a mismatch between the short and long string,
dont add to the result ("") string. If there is a match, add it to the result string, and mark the letter as *seen* using a set.

If add the end of the either string, end the while loop and check the result.  
Because the result string must be the gcd of str1 and str2, you should be able to confirm the eqaulity of str1 + str2 = str2 + str1.
I am think I can do this using the result I get.

### Psuedo Code

**lstr** = longer string  
**sstr** = shorter string

    Traverse through sstr
        compare lstr[i] with sstr[j]
            if lstr[i] === sstr[j]:
                add sstr[i] to a set of characters
            
Or I could do a while loop instead of nested for loop

    m = lstr.length
    n = sstr.length
    i = 0
    j = 0
    while (i < m || j < n)
        if lstr[i] === sstr[j]:
            add sstr[i] to a set of characters


### My Solution

#### Javascript
```javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const hasBeenSeen = new Set();

    let result = "";
    let i = 0;
    let j = 0;
    while(i < m || j < n){
        if(!hasBeenSeen.has(str1[i]) && str1[i] === str2[j]) {
            result += str1[i];
            hasBeenSeen.add(str1[i]);
        }
        else if(!hasBeenSeen.has(str1[i]) && str1[i] !== str2[j]) {
            break;
        };

        i++;
        j++;
    }
    if((str2 + result) !== str1) return "";
    return result;
};
```

**Issues**:  

1. My attempt above passes the initial 4 examples but fails to account for when str1 is shorter than str2.
2. ```if((str2 + result) !== str1) return ""``` doesnt do what I think when str1 is maybe made up of 3 or more str2's.
3. Also, because this problem involves the Greatest Common Divisor, I couldnt remember Euclid's Algorithm,
so this was my best attempt.


### Alternate Solutions
---
#### 1. Euclid's Algorithm
* [Main Source](https://sites.math.rutgers.edu/~greenfie/gs2004/euclid.html#:~:text=The%20Euclidean%20algorithm%20is%20a,%3D1%C2%B730%2B15.)
* [Formal Proof](https://www.cut-the-knot.org/blue/Euclid.shtml)

The Euclidean algorithm
The Euclidean algorithm is a way to find the *greatest common divisor* of two positive integers, a and b. First let me show the computations for a=210 and b=45.

* Divide 210 by 45, and get the result 4 with remainder 30, so 210 = 4 · 45 + 30.
* Divide 45 by 30, and get the result 1 with remainder 15, so 45 = 1 · 30 + 15.
* Divide 30 by 15, and get the result 2 with remainder 0, so 30 = 2 · 15 + 0.
* The greatest common divisor of 210 and 45 is **15**.

**Formal description of the Euclidean algorithm**  
* **Equation**: ```a = q · b + r```
* **Input** Two positive integers, a and b.  
* **Output** The greatest common divisor, g, of a and b.
* **Internal computation**
    * If a < b, exchange a and b.
    * Divide a by b and get the remainder, r. If r=0, report b as the GCD of a and b.
    * Replace a by b and replace b by r. Return to the previous step.
  
**Example**
```
a     =   q   ·   b    +   r
-----------------------------
210   =   4   ·   45   +   30
45    =   1   ·   30   +   15
30    =   2   ·   15   +   0
```


##### Approach
---

Credit: https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3126159/100-easy-js-sol-explained-with-intuition-approach/?envType=study-plan-v2&envId=leetcode-75

* The approach of the below function is to find the greatest common divisor (GCD) of the lengths of the two input strings, str1 and str2, and use that value as the length of the desired common prefix.
* The function starts by checking if the concatenation of str1 and str2 is equal to the concatenation of str2 and str1.
* If not, it returns an empty string, as this is a necessary condition for the two strings to have a common prefix.
* If the concatenation of str1 and str2 is equal to the concatenation of str2 and str1, the function calculates the GCD of the lengths of the two strings using the Euclidean algorithm.
* The Euclidean algorithm is implemented using the gcds function, which takes two input numbers and returns their GCD.
* Finally, the function uses the slice method to extract a substring of str1 with length equal to the GCD of the lengths of str1 and str2.
* This substring is the desired common prefix and is returned as the result of the function.

##### My Understanding Of This Approach

* If str1 and str2 do share a GCD it means str1 + str2 = str2 + str1.
* That said, if str1 and str2 share a GCD, then the same can be said about their string lengths, l1 and l2.
* **For example**:
    * str1: "CATCATCAT"
    * str2: "CATCAT"
    * str1 + str2 = "CATCATCATCATCAT"
    * l1: 9
    * l2: 6
    * gcd(9, 6): 3
        * 9   =   1   ·   6   +   3  
        * 6   =   2   ·   3   +   0  
        * 3   =   -   ·   0   +   -  
    * If we take the result 3, and look at the first 3 letters of str1, we get the desired GCD string.

##### Solution

```javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // Unworkable case
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Euclids Alg: a = q * b + r
    let gcd = (a, b) => {
        if (!b) {
            return a;
        }
        return gcd(b, a % b);
    }

    let div = gcd(str1.length, str2.length);
    
    return str1.slice(0, div);
};
```


##### Complexity
**Time complexity**: O(log(min(n,k)))  
Because here n is the length of str1 and k is the length of str2.
This is because the time complexity of the gcds function, which implements the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers, is O(log(min(x, y))), where x and y are the two input numbers.  

**Space complexity**: O(1)  
Because as the function uses only a few variables and does not store any data structures in memory, such as arrays or objects.

