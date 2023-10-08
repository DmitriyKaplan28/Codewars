function pascalsTriangle(n) {
    let pascal = [];
    let idx = 0;

    for (let i = 0; i < n; i++) {
        idx = pascal.length - i;
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                pascal.push(1);
            } else {
                pascal.push(pascal[idx + j] + pascal[idx + j - 1]);
            }
        }
    }

    return pascal;
}