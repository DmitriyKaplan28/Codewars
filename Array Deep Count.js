function deepCount(a) {
    return a.reduce((s, e) => s + (Array.isArray(e) ? deepCount(e) : 0), a.length);
}