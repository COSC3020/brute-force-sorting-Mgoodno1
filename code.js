function permutationSort(a) {
    let count = 0;

    function isSorted(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    function permute(arr, startIndex) {
        if (startIndex === arr.length) {
            count++;

            if (isSorted(arr)) {
                return true;
            }
            else{
                return false;

            }
        }
        
        for (let i = startIndex; i < arr.length; i++) {
            [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
            if (permute(arr, startIndex + 1)) {
                return true;
            }
            [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
        }
        return false;
    }

    permute(a, 0);
    return count;
}
