function splitInteger(num, parts) {
    const remainder = num % parts;
    const int = Math.floor(num / parts);

    return [
        ...new Array(parts - remainder).fill(int),
        ...new Array(remainder).fill(int + 1)
    ];
}