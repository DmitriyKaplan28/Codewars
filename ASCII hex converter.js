var Converter = {
  toAscii: function (hex) {
    let arr=[];
    for (let i=0;i<hex.length;i+=2){
        arr.push(hex.slice(i,i+2))
      }
    return arr.map(v=>String.fromCharCode(parseInt(v,16))).join('')
  },
  toHex: function (ascii) {
     return ascii.split('').map(v=>v.charCodeAt().toString(16)).join('')
  }
}
