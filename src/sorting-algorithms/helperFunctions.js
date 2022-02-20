function swap(array, indexA, indexB) {
    let temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
    return array;
}

function copy(array) {
    return JSON.parse(JSON.stringify(array))
}

export { swap, copy }