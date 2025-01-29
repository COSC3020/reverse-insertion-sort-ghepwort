function insertionSortReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        // Invariant: the elements in arr[i + 1 .. arr.length - 1] are in sorted order.
        var val = arr[i]
        var j;
        for (j = i + 1; j < arr.length && arr[j] < val; j++) {
            arr[j - 1] = arr[j];
        }
        arr[j - 1] = val;
    }
    return arr
}