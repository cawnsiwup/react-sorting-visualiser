import { swap, copy } from "./helperFunctions"

function gnomeSort(array) {
    let steps = []
    let start = 0
    let pos = 0

    let found = false

    while (pos < array.length) {
        array[pos].color = "orange"
        steps.push(copy(array))
        array[pos].color = "gray"

        if (pos === 0) {
            pos++
        }
        if (array[pos].value >= array[pos - 1].value) {
            if (found) {
                array[pos].color = "green"
                steps.push(copy(array))
                array[pos].color = "grey"
            }
            found = false
            pos++
        }
        else {
            found = true
            swap(array, pos, pos - 1)
            pos--
        }

    }

    steps.push(copy(array))

    for (let i = 0; i < array.length; i++) {
        array[i].color = "green"
        steps.push(copy(array))
    }

    return steps
}

export { gnomeSort }