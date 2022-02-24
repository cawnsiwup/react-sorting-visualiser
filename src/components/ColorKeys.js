const ColorKeys = {
    bubbleSort: [
        {
            color: "orange",
            meaning: "compare"
        }
    ],
    cocktailSort: [
        {
            color: "orange",
            meaning: "compare"
        }
    ],
    gnomeSort: [
        {
            color: "orange",
            meaning: "compare"
        },
        {
            color: "red",
            meaning: "found correct position"
        }
    ],
    insertionSort: [
        {
            color: "orange",
            meaning: "compare"
        },
        {
            color: "red",
            meaning: "found correct position"
        }
    ],
    mergeSort: [
        {
            color: "orange",
            meaning: "merged"
        }
    ],
    quickSort: [
        {
            color: "orange",
            meaning: "compare"
        },
        {
            color: "red",
            meaning: "pivot"
        }
    ],
    selectionSort: [
        {
            color: "orange",
            meaning: "compare"
        },
        {
            color: "red",
            meaning: "found smallest item"
        }
    ],
    shellSort: [
        {
            color: "orange",
            meaning: "compare"
        }
    ]
}

Object.keys(ColorKeys).map(algo => {
    ColorKeys[algo] = [{color: "green", meaning: "sorted"}, ...ColorKeys[algo]]
})

export { ColorKeys }