function towerBuilder(nFloors, nBlockSz) {
  const tower = []
  for (let i=0;i<nFloors;i++){
    for (let j=0;j<nBlockSz[1];j++){
      tower.push(' '.repeat((nFloors-i)*nBlockSz[0]-nBlockSz[0])+'*'.repeat(nBlockSz[0]+(i*(nBlockSz[0]*2)))+' '.repeat((nFloors-i)*nBlockSz[0]-nBlockSz[0]))
    }
  }
  return tower
}
