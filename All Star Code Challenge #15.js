const rotate = (str) => {
    const strLen = str.length
    const result = []
    if (strLen === 0) {
        return result
    }
    for (let i = 1; i < strLen; i += 1 || 0) {
        result.push(str.slice(i) + str.slice(0, i))
    }
    result.push(str)
    return result
}