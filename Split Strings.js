function solution(str) {
    var arrayStr = str.split('')
    var result = []

    for (let i = 0; i < arrayStr.length; i += 2) {
        if (arrayStr[i + 1]) result.push(arrayStr[i] + arrayStr[i + 1])
        else result.push(arrayStr[i] + '_')
    }

    return result
}