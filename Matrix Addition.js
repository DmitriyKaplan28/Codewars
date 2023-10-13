function matrixAddition(a, b) {
    return a.map(function (n, i) {
        return n.map(function (o, j) {
            return o + b[i][j];
        });
    });
}