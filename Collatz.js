function collatz(n) {
    let num = [];
    for (let i = n; ;) {
        if (i === 1) {
            num.push(i)
            break
        }
        if (i % 2 === 0) {
            num.push(i)
            i = i / 2
        } else {
            num.push(i)
            i = i * 3 + 1
        }
    }
    return num.join('->')
}