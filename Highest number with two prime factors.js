function highestBiPrimeFac(p1, p2, n) {
    let result = []
    let j = 1;
    for (let i = 1; Math.pow(p1, i) * p2 <= n; i++) {
        for (j = 1; j <= i; j++) {
            result.push([Math.pow(p1, j) * p2, j, 1])
            result.push([Math.pow(p2, j) * p1, 1, j])
            result.push([Math.pow(p1, j) * Math.pow(p2, i), j, i])
            result.push([Math.pow(p2, j) * Math.pow(p1, i), i, j])
        }
    }
    return result.filter(v => v[0] <= n).sort((a, b) => b[0] - a[0])[0]
}