function pickPeaks(arr){
  let result = { pos: [], peaks: [] };
  for (let i = 1; i < arr.length; i++) {
    let position;
    if (arr[i] > arr[i - 1]){
      position = i;
    } else if (arr[i] < arr[i - 1] && position){
      result.pos.push(position);
      result.peaks.push(arr[position]);
      position = null;
    }
  }
  return result;
}
