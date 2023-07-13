function solution(list) {
    let result = [];
    let tempArr = [];
    for (let num of list) {
        let followingItem = list[list.indexOf(num) + 1];
        if (num + 1 === followingItem) {
            tempArr.push(num, followingItem)
        } else {
            if (tempArr.length > 3) {
                result.push(`${tempArr[0]}-${tempArr[tempArr.length - 1]}`)
            } else if (tempArr.length === 2) {
                result.push(...tempArr);
            } else {
                result.push(num)
            }
            tempArr = []
        }
    }
    return result.join();
}