function findNb(m) {
    let cubesCount = 0
    let n = 0

    while (cubesCount < m) {
        n += 1;
        cubesCount += n ** 3
    }

    return cubesCount === m ? n : -1;
}
