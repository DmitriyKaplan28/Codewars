function nthFibo(n) {
    let [prev, curr] = [0, 1];
    for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
    return prev;
}