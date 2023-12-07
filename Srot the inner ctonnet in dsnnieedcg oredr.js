function sortTheInnerContent(words) {
    return words.replace(/\B\w+(?=\w)/g, function (match) {
        return match.split('').sort().reverse().join('');
    });
}