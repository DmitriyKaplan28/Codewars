function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function numPrimorial(n) {
    let arr = []
    let i = 2
    while (arr.length < n) {
        if (isPrime(i)) {
            arr.push(i)
        }
        i++
    }
    return arr.reduce((a, b) => a * b)
}