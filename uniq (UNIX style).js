function uniq(a) {
  for (let i=0;i<a.length-1;i++){
    if (a[i]===a[i+1]){
      a.splice(i,1)
      i--
    }
  }
  return a
}
