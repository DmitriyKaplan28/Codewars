const annualRecords = (town, s) => s.match(new RegExp(`${town}:(.*)(\n|$)`, ''))[1].match(/\d+\.\d/g).map(Number);
const mean = (...args) => {
    try {
        return annualRecords(...args).reduce((a, b) => a + b) / 12;
    } catch (err) {
        return -1;
    };
};
const variance = (...args) => {
    try {
        return annualRecords(...args).reduce((res, num) => res + (num - mean(...args)) ** 2, 0) / 12;
    } catch (err) {
        return -1;
    };
};