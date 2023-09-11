const validate = num => {
    let numArr = Array.from(String(num), Number);
  
    if (numArr.length % 2 === 0) {
      for(let i = 0; i< numArr.length; i+=2) {
        numArr[i] *= 2;
      }
    } else {
      for(let i = 1; i< numArr.length; i+=2) {
        numArr[i] *= 2;
      }
    }
  
    const lessThan18Arr = numArr.map(num => num > 9 ? num - 9 : num)
  
    const sum = lessThan18Arr.reduce((acc, elm) => acc + elm, 0)
  
    return sum % 10 === 0;
  }