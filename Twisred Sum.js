function twistedSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i.toString().length > 1) {
            i.toString()
                .split("")
                .forEach((index) => {
                    sum += parseInt(index);
                });
        } else {
            sum += i;
        }
    }
    return sum;
}
