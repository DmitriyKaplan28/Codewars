function f(n) {
    if(n==0) return 0;
    let str = n.toString(3)
    if(str[0] == '1')
        str = '2' +  str.slice(1)
    else
        str = '1' + str.slice(1) + '0'
    return parseInt(str, 3);
}