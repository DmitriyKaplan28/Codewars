function runLengthEncoding(str) {
    let arr = [],
        counter = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            counter++;
        } else {
            arr.push([counter, str[i]]);
            counter = 1;
        }
    }

    return arr;
}