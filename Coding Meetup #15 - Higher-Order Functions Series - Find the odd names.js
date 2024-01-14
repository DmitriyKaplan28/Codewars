function findOddNames(list) {
    return list.filter(v => v.firstName.split``.reduce((a, b) => a + b.charCodeAt(), 0) % 2 !== 0)
}