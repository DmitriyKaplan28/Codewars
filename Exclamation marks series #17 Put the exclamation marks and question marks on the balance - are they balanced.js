function balance(left, right) {
    const l = left.split('').map(v => v === '!' ? v = 2 : v = 3).reduce((a, b) => a + b, 0);
    const r = right.split('').map(v => v === '!' ? v = 2 : v = 3).reduce((a, b) => a + b, 0);
    return l > r ? 'Left' : l === r ? "Balance" : 'Right';
}