function rank(st, we, n) {
    let arr = st.toLowerCase().split`,`.map((v, i) => (v.split``.map(v => v.charCodeAt() - 96).reduce((a, b) => a + b, 0) + v.length) * we[i])
    const entries = st.split`,`.map((v, i) => [arr[i], v]).sort((a, b) => a[0] === b[0] ? a[1].localeCompare(b[1]) : b[0] - a[0])
    if (!st.length) return "No participants"
    return entries[n - 1] ? entries[n - 1][1] : "Not enough participants"
}