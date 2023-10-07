#### 1768. Merge Strings Alternately

##### Summary
Given two words **w1** and **w2** (each of a minimum length of 1 character),
*merge* them together into one word by adding the letters from each word together in an alternating fashion.

**Example**:  
w1: "cat"  
w2: "dog"  
merged: w1 + w2 => "cat" + "dog"  
merged: "c" + "d" + "a" + "o" + "t" + "g"  
merged idx: 0<sub>w1</sub> + 0<sub>w2</sub> + 1<sub>w1</sub> + 1<sub>w2</sub> + 2<sub>w1</sub> + 2<sub>w2</sub>  
merged = "cdaotg"  

**note**: **w1** and **w2** do not need to be the same length. One word may be longer than the others, however, each word is garaunteed to be at least 1 character long.

If one word is longer than the other, append the rest of its characters after merging the alternating characters first.


##### Initial Approach:

I am thinking I can use just one pointer index to visit each character in both words.  
Ideally, I will use index i and traverse until the lenght of the longest word. So if w1 length is 3 and w2 length is 5,  
I will traverse until index i is less than length 5. 

This means i need to check before appending characters to result that at some index i in either w1 or w2, there exists  
a character to be appended.


###### Psuedo Code

```javascript
function (w1 , w2) {
// Easy Case
if (w1.length === 1 || w2.length === 2) return w1.concat(w2)

// Otherwise
let result = ""
let lengthOfLongestWord = w2.length >= w1.length ? w2.length  : w1.length
for(idx = 0; i < lengthOfLongestWord; idx++)
    if(w1[idx] === "" ) // No more chars in w1
        if(w2[idx]) // Valid char in w2
            result += w2[idx]
        else // No more chars in w2
            return result
}
```


###### My Solution


```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = ""
    let length = word2.length > word1.length ? word2.length : word1.length;
    if(word1.length === 1) return word1.concat(word2);
    if(word2.length === 1) return word1.slice(0, 1) + word2[0] + word1.slice(1);
    for(let i = 0; i < length; i++) {
        // No more chars in w1
        if(!word1[i] && word2[i]) {
            result += word2[i];
        }
        // No more chars in w2
        else if (word1[i] && !word2[i]) {
            result += word1[i];
        }
        // perfect case
        else result += word1[i] + word2[i];

        console.log(`${i} -> result: ${result}`)

    }
    return result;
};
```
