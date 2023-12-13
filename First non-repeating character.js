function firstNonRepeatingLetter(s) {
    let t = s.toLowerCase();
    for (let x = 0; x < t.length; x++)
        if (t.indexOf(t[x]) === t.lastIndexOf(t[x]))
            return s[x];
    return "";
}