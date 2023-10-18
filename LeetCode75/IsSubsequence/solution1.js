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
