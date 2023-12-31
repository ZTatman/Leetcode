// Time Complexity: O(1), only have a finite range of roman numerals to translate,  1 <= s <= 3999
// Space Complexity: O(1), only have to store a constant number of numerals to reference 
const valueBySymbol = Object.freeze({
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
});

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let result = 0;
    let i = 0;
    while(i < s.length) {
        let curr = s[i], next = s[i + 1];
        // Check if it is a special case
        if ((curr == "I" && next == "V" || curr == "I" && next == "X") ||
            (curr == "X" && next == "L" || curr == "X" && next == "C") ||
            (curr == "C" && next == "D" || curr == "C" && next == "M")) {
            result += valueBySymbol[next] - valueBySymbol[curr];
            i += 2;
        }
        else {
            result += valueBySymbol[curr];
            i++;
        }
    };
    return result;
};
