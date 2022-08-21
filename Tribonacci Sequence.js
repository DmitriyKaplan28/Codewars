function tribonacci(signature, n) {
    if (n - 1 < 2 && n > 0) {
        let newArray = []
        for (let i = 0; i < n; i++) {
            newArray.push(signature[i])
        }
        return newArray
    } else if (n === 0) {
        return []
    } else {
        for (let i = 0; i + 2 < n - 1; i++) {
            signature.push(signature[i] + signature[i + 1] + signature[i + 2])
        }
        return signature
    }
}

console.log(tribonacci([0, 1, 1], 4))