function foldArray(array, runs) {
    let Array = array.slice();
    let EndArray = []

    while (Array.length > 1) {
        EndArray.push(Array[0] + Array[Array.length - 1]);
        Array = Array.slice(1, Array.length - 1);
    }
    if (Array.length > 0) {
        EndArray.push(Array[0]);
    }
    if (runs > 1) {
        return foldArray(EndArray, runs - 1)
    }
    return EndArray;
}