var locate = function(arr,value){
  let arr2=[]
  function flatten(arr){
    return arr.map((a)=>Array.isArray(a)?flatten(a):arr2.push(a.toString()))
  }
  flatten(arr)
  return arr2.some(v=>v===value.toString())
}
