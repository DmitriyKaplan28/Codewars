const thirt = (n) => {
    let r = n.toString().split("").reverse().reduce((acc, curr, i) => acc + curr * (Math.pow(10, i) % 13), 0)
    return n === r ? n : thirt(r)
}