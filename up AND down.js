function arrange(str) {
    var words = str.split(' ');

    for (var d = 1, j = 0, i = 1; i < words.length; i++) {
        if (d * words[j].length > d * words[i].length) {
            [words[j], words[i]] = [words[i], words[j]];
        }

        j = i;
        d = -d;
    }

    return words
        .map((w, i) => w[i % 2 ? 'toUpperCase' : 'toLowerCase']())
        .join(' ');
}