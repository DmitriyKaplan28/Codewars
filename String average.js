const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
];

const averageString = (str) => {
    const nums = str.split(' ').map(v => numbers.indexOf(v));
    if (nums.includes(-1)) return 'n/a'
    const sum = nums.reduce((prev, cur) => prev + cur);
    const average = Math.floor(sum / nums.length)
    return numbers[average]
}