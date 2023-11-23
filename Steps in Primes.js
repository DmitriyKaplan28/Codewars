function step(g, m, n) {
    for (let i = m; i <= n; i++) {
        if (isPrime(i) && isPrime(i + g)) { return [i, i + g] }
    }
    return null;
}
function isPrime(n) {
    let rt = Math.sqrt(n);
    for (let i = 2; i <= rt; i++) {
        if (n % i === 0) return false;
    }
    return n !== 1;
}