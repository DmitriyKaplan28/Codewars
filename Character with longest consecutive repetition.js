function longestRepetition(s) {
    let count = 0;
    let prevLetter = '';

    return s.toLowerCase().split('').reduce((acc, curr) => {
        if (curr === prevLetter) {
            count++;
        }
        else {
            count = 1;
        }

        if (count > acc[1]) {
            acc[1] = count;
            acc[0] = curr;
        }

        prevLetter = curr;
        return acc;
    }, ['', 0]);
}