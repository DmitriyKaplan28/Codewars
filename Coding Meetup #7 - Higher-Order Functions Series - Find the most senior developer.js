function findSenior(list) {
    const maxAge = Math.max(...list.map(dev => dev.age))
    return list.filter(({ age }) => age === maxAge)
}