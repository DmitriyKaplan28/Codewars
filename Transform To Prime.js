function minimumNumber(numbers) {
    let sum = numbers.reduce((a, b) => a + b, 0)
    for (let i = 0; ; i++) {
        if (isPrime(sum + i)) { return i }
    }
}
function isPrime(n) {
    let rt = Math.sqrt(n);
    for (let i = 2; i <= rt; i++) {
        if (n % i === 0) return false;
    }
    return n !== 1;
}