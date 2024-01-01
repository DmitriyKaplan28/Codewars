function binaryToString(binary) {
    return binary.replace(/[01]{8}/g, function (v) {
        return String.fromCharCode(parseInt(v, 2));
    });
}ББББ