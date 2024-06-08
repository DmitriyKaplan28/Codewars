function cycle(dir, arr, cur) {
	if (!arr.includes(cur)) return null; 
  const index=arr.indexOf(cur) 
  return arr[(index+dir)%arr.length]?arr[(index+dir)%arr.length]:arr.reverse()[index%arr.length]
}
