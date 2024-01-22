function mineLocation(f) {
    let p = 0;
    let p1 = 0
    for (let i = 0; i < f.length; i++) {
        for (let j = 0; j < f[i].length; j++) {
            if (f[i][j] === 1) { p1 = j; p = i }
        }
    }
    return [p, p1]
}