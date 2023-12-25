function looseChange(cents) {
    cents = Math.floor(cents);
    let obj = { 'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0 };
    while (cents >= 25) {
        cents -= 25;
        obj.Quarters++
    }
    while (cents >= 10) {
        cents -= 10;
        obj.Dimes++
    }
    while (cents >= 5) {
        cents -= 5;
        obj.Nickels++
    }
    while (cents >= 1) {
        cents -= 1;
        obj.Pennies++
    }
    return obj
}