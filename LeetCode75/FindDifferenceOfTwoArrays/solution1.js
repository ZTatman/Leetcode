/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let res1 = [], res2 = [];

    set1.forEach(x => {
        if (!set2.has(x)) {
            res1.push(x);
        }
    });

    set2.forEach(x => {
        if (!set1.has(x)) {
            res2.push(x);
        }
    });

    return [res1, res2];
}
