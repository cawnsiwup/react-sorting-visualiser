import { swap, copy } from "./helperFunctions"

function selectionSort(array) {
    let n = array.length;
    let steps = []

    for (let i = 0; i < n; i++) {
        let min = i;
        array[min].color = "red"
        for (let j = n - 1; j > i; j--) {
            array[j].color = "orange"
            steps.push(copy(array))
            array[j].color = "grey"

            if (array[j].value < array[min].value) {
                array[min].color = "grey"
                min = j;
                array[min].color = "red"

            }
        }

        if (min != i) {
            swap(array, i, min)

        }



        array[i].color = "green"
        steps.push(copy(array))
    }
    return steps;
}

export { selectionSort }