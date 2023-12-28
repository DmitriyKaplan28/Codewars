function findNumber(array) {
    return ((1 + (array.length + 1)) * (array.length + 1)) / 2 - array.reduce((sum, item) => sum + item, 0)
}