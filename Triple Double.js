function tripledouble(num1, num2) {
    let nums = [...Array(10).keys()];

    return +nums.some(num =>
        num1.toString().includes(num.toString().repeat(3)) &&
        num2.toString().includes(num.toString().repeat(2))
    );
}