function countSmileys(arr) {
    return arr.filter(v=>v.match(/(:|;)(-|~)?(\)|D)/)).length
}