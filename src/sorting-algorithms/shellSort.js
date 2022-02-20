import { swap, copy } from "./helperFunctions.js"

function shellSort(arr) {
    let n = arr.length;
    let steps = []
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {

            let temp = arr[i];

            let j;
            for (j = i; j >= gap && arr[j - gap].value > temp.value; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
            arr[i].color = "orange"
            arr[i - gap].color = "orange"
            steps.push(copy(arr))
            arr[i].color = "gray"
            arr[i - gap].color = "gray"

        }

    }

    steps.push(copy(arr))

    for (let i = 0; i < arr.length; i++) {
        arr[i].color = "green"
        steps.push(copy(arr))
    }

    return steps;
}


export { shellSort }