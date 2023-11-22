function calculate1RM(w, r){
  let a= w *(1+r/30);
  let b= (100*w)/(101.3-2.67123*r);
  let c=w*(r**0.1);
  if (r===0||w===0) return 0;
  if (r===1) return w;
  return Math.round(Math.max(a,b,c))
}
