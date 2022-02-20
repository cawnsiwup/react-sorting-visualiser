import { swap, copy } from "./helperFunctions"

function cocktailSort(array) {
    let steps = []

    let end = array.length - 1
    let start = 0
    let swapped = true

    while (swapped) {
        swapped = false

        for (let i = start; i < end; i++) {
            if (array[i].value > array[i + 1].value) {
                array = swap(array, i, i + 1)
                swapped = true
            }
            array[i].color = "orange"
            array[i + 1].color = "orange"
            steps.push(copy(array))
            array[i].color = "grey"
            array[i + 1].color = "grey"

        }

        array[end].color = "green"
        steps.push(copy(array))




        if (!swapped) {
            break;
        }

        swapped = false
        end--

        for (let i = end - 1; i > start - 1; i--) {
            if (array[i].value > array[i + 1].value) {
                array = swap(array, i, i + 1)
                swapped = true
            }
            array[i].color = "orange"
            array[i + 1].color = "orange"
            steps.push(copy(array))
            array[i].color = "grey"
            array[i + 1].color = "grey"
        }

        array[start].color = "green"
        steps.push(copy(array))

        start++
    }

    while (start < (end + 1)) {
        array[start].color = "green"
        array[end].color = "green"
        steps.push(copy(array))
        start++
        end--
    }


    return steps

}

export { cocktailSort }