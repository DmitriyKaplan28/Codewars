function deleteNth(arr, x) {
    return arr.reduce(function (a, v) {
        return count(a, v) < x ? a.concat(v) : a;
    }, []);
}

function count(arr, z) {
    return arr.filter(function (q) {
        return z == q
    }).length;
}