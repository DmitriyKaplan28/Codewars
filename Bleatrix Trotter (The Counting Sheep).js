function trotter(n){
  let check = n
  let arr = n.toString().split``
  for (let i=1;i<1000;i++){
    n=check*i
    arr=arr.concat(n.toString().split``)
    arr=[...new Set(arr)]
    if (arr.length===10) return n
  }
  return "INSOMNIA"
}
