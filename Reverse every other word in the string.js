function reverse(str){
  
    let arr = str.split(" "); 
  
    for(var i = 1; i<arr.length; i+=2){
        arr[i] = arr[i].split('').reverse().join(""); 
    }
    
    return arr.join(" ").trim(); 
    
  }