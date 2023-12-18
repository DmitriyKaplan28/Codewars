function removeParentheses(s) {
    let result = "";
    let count = 0;
    for (let letter of s) {
        if (letter == "(") count += 1;
        if (count == 0) result += letter;
        if (letter == ")") count -= 1
    }
    return result
}