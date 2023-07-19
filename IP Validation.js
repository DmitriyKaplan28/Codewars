function isValidIP(str) {
    return str.split('.').filter(function (v) {
        return +v <= 255 && +v >= 0 && v.length == String(+v).length;
    }).length == 4;
}