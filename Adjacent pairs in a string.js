function countAdjacentPairs(searchString) {
  let obj={};
  searchString.toLowerCase().split(' ').map(v=>obj[v]=obj[v]?obj[v]+1:1);
  return Object.values(obj).filter(v=>v>1).length
}
