function chained(functions) {
    return input => functions.reduce((res, func) => func(res), input);
}