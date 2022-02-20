import { swap, copy } from "./helperFunctions"

function partition(array, start, end, steps) {
    let pivot = array[end]
    let pivotIndex = start

    for (let i = start; i < end; i++) {

        if (array[i].value <= pivot.value) {


            array = swap(array, i, pivotIndex)
            pivotIndex++
        }
        array[pivotIndex].color = "red"
        array[i].color = "orange"
        steps.push(copy(array))
        array[pivotIndex].color = "grey"
        array[i].color = "grey"
    }


    array = swap(array, pivotIndex, end)
    array[pivotIndex].color = "green"
    steps.push(copy(array))

    return pivotIndex
}

function quickSort(array, start, end, steps) {
    if (start < end) {
        let pivot = partition(array, start, end, steps)

        quickSort(array, start, pivot - 1, steps)

        array[start].color = "green"

        steps.push(copy(array))

        quickSort(array, pivot + 1, end, steps)

        array[end].color = "green"

        array[pivot].color = "green"

    }
}

function cleanQuickSort(array) {
    let steps = []
    quickSort(array, 0, array.length - 1, steps)
    steps.push(copy(array))

    return steps
}

export { cleanQuickSort as quickSort }