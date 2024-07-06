function roomMates( rooms, floor ){
  return rooms.slice(floor * 6 - 6, +floor * 6).filter(v=>v) 
}
