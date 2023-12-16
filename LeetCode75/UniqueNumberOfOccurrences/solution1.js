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
