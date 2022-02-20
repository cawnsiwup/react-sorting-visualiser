import { swap, copy } from "./helperFunctions"

function bubbleSort(array) {
    let steps = []
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j].value > array[j + 1].value) {
                array = swap(array, j, j + 1);
            }
            array[j].color = "orange"
            array[j + 1].color = "orange"
            steps.push(copy(array))
            array[j].color = "grey"
            array[j + 1].color = "grey"

        }
        array[array.length - 1 - i].color = "green"
        steps.push(copy(array))
    }

    array[0].color = "green"
    steps.push(array)

    return steps
}

export { bubbleSort }