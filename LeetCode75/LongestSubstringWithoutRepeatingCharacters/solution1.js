// Time Complexity: O(n), we traverse through all chars in the string
// Space Complexity: O(n), given a completely unique string, we would store entire stirng as a substring in set.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let seen = new Set();
    let start = 0, end = 0;

    while(end < s.length) {
        if(!seen.has(s[end])) {
            seen.add(s[end++]);
            maxLength = Math.max(maxLength, seen.size);
        }
        else {
            seen.delete(s[start++]);
        }
    }

    return maxLength;
};
