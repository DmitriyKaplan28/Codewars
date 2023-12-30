function solve(arr) {
    let dict = arr.reduce((a, b) => (a[b] = a[b] + 1 || 1, a), {})
    return arr.sort((a, b) => dict[b] - dict[a] || a - b)
}