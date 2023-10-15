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
