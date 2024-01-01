function rot(strng) {
    let arr = strng.slice().split('\n').reverse().map(v => v.split('').reverse().join(``)).join('\n')
    return arr
}
function selfieAndRot(strng) {
    let n = strng.slice().split('\n')[0].length
    let arr = strng.slice().split('\n').reverse().map(v => v.split('').reverse().join(``)).join(`\n${'.'.repeat(n)}`)
    let arr2 = strng.slice().split('\n').join(`${'.'.repeat(n)}\n`)
    return arr2 + `${'.'.repeat(n)}\n${'.'.repeat(n)}` + arr
}
function oper(fct, s) {
    return fct(s)
}