function diamond(n) {
    if (n < 1 || n % 2 === 0) return null
    let result = '', mid = Math.ceil(n / 2);
    for (let i = 1; i <= n; i++) {
        if (i <= mid) {
            result += ' '.repeat(mid - i) + '*'.repeat(2 * i - 1) + '\n'
        } else {
            result += ' '.repeat(i - mid) + '*'.repeat(2 * (n - i) + 1) + '\n'
        }
    }
    return result;
}