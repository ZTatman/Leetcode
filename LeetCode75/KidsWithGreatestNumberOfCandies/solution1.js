/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 // Time Complexity: O(n)
 // Space Complexity: O(1)
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = 0;
    let l = 0, r = candies.length - 1;
    while(r > l || l < r) {
        if(candies[r] > candies[l]){
            maxCandies = candies[r];
            l++;
        }
        else {
            maxCandies = candies[l];
            r--;
        }
    }
    return candies.map(candy => (candy + extraCandies) >= maxCandies);
};
