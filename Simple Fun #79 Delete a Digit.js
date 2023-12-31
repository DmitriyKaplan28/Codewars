function deleteDigit(n) {
    const arr = n.toString().split('');
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let itisnotabigdeal = ((arr.slice(0, i) + arr.slice(i + 1))).split(',').join('') * 1
        if (itisnotabigdeal > result) {
            result = itisnotabigdeal;
        }
    }
    return result;
}