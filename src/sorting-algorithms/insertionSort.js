import { swap, copy } from "./helperFunctions"

function insertionSort(array) {
    let steps = [];
    let currentItem, currentPos
    for (let i = 0; i < array.length; i++) {
        currentItem = array[i]
        currentPos = i

        while ((currentPos > 0) && (array[currentPos - 1].value > currentItem.value)) {
            array[currentPos].color = "orange"
            array = swap(array, currentPos, currentPos - 1)
            currentPos--

            steps.push(copy(array))
            array[currentPos + 1].color = "grey"
        }
        array[currentPos] = currentItem
        array[currentPos].color = "green"
        for (let x = 0; x < 3; x++) {
            steps.push(copy(array))
        } // pushing the same step 3 times so the visual change is more obvious
        array[currentPos].color = "grey"


    }

    for (let i = 0; i < array.length; i++) {
        array[i].color = "green"
        steps.push(copy(array))
    }

    console.log(steps)

    return steps
}

export { insertionSort }