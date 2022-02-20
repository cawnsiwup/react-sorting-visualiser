import { swap, copy } from "./helperFunctions.js"

function merge(arr, start, mid, end, steps) {
    let start2 = mid + 1;

    // If the direct merge is already sorted
    if (arr[mid].value <= arr[start2].value) {
        return;
    }

    let ogStart = start
    let ogEnd = end

    // Two pointers to maintain start
    // of both arrays to merge
    while (start <= mid && start2 <= end) {

        // If element 1 is in right place
        if (arr[start].value <= arr[start2].value) {
            start++;
        }
        else {
            let og = arr[start2];
            let index = start2;

            // Shift all the elements between element 1
            // element 2, right by 1.
            while (index != start) {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[start] = og
            steps.push(copy(arr))

            // Update all the pointers
            start++;
            mid++;
            start2++;
        }
    }


    let temp = ogStart
    while (temp < ogEnd + 1) {
        if (ogStart === 0 && ogEnd === (arr.length - 1)) {
            arr[temp].color = "green"
        } else {
            arr[temp].color = "orange"
        }
        steps.push(copy(arr))
        temp++

    }

    while (ogStart < ogEnd + 1) {
        arr[ogStart].color = "gray"
        ogStart++
    }
}

/* l is for left index and r is right index
of the sub-array of arr to be sorted */
function mergeSort(arr, l, r, steps) {
    if (l < r) {

        // Same as (l + r) / 2, but avoids overflow
        // for large l and r
        let m = l + Math.floor((r - l) / 2);

        // Sort first and second halves
        mergeSort(arr, l, m, steps);
        mergeSort(arr, m + 1, r, steps);

        merge(arr, l, m, r, steps);
    }
}

function cleanMerge(arr) {
    let steps = []
    mergeSort(arr, 0, arr.length - 1, steps)
    return steps
}

export { cleanMerge as mergeSort }