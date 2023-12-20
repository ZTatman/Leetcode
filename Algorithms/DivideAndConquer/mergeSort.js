// Merge sort helper
function merge(arr1, arr2) {
    let result = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
    return [...result, ...arr1, ...arr2];
}

function mergeSort(arr) {
    if (arr.length == 1) return arr;

    let mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

const array = [-1, 99, 4, 7, 231, -23, 5, 39];
console.log("sorting... ", array);
const sortedArray = mergeSort(array);
console.log("sortedArray: ", sortedArray);
