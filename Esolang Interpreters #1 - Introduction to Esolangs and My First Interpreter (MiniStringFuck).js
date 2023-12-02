function myFirstInterpreter(code) {
    let out = "", byte = 0;
    [...code].forEach(cmd => {
        switch (cmd) {
            case "+": byte = (byte + 1) % 256; break;
            case ".": out += String.fromCharCode(byte); break;
        }
    })
    return out
}