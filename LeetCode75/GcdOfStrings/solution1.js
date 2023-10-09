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
