function binarySearch(array, target) {
    let lo = 0, hi = array.length;

    while (lo <= hi) {
        let mid = lo + ((hi - lo) / 2); // this version prevents integer overflow

        if (array[mid] == target) {
            return array[mid];
        }
        else if (array[mid] > target) {
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }
    }

    return -1;
}
