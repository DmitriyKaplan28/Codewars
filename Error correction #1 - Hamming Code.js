function encode(s) {
    return [...s].map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join('').replace(/./g, b => b.repeat(3));
}

function decode(s) {
    return s.replace(/.../g, m => +m[0] + +m[1] + +m[2] > 1 ? '1' : '0').replace(/.{8}/g, m => String.fromCharCode(parseInt(m, 2)));
}