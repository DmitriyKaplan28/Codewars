function calculateBmi(weight, height) {
  const bmi = (weight/((height/100)*(height/100))).toFixed(1)
  let  z=''
  const obj={};
  if (bmi<15) z='Very severely underweight';
  if (bmi<16&&bmi>15) z= 'Severely underweight';
  if (bmi<18.5&&bmi>16) z= 'Underweight';
  if (bmi<25&&bmi>18.5) z= "Normal (healthy weight)";
  if (bmi<30&&bmi>25) z= 'Overweight';
  if (bmi<35&&bmi>30) z= 'Obese Class I (Moderately obese)';
  if (bmi<40&&bmi>35) z= 'Obese Class II (Severely obese)';
  if (bmi<45&&bmi>40) z= 'Obese Class III (Very severely obese)';
  if (bmi<50&&bmi>45) z= 'Obese Class IV (Morbidly Obese)';
  if (bmi<60&&bmi>50) z= 'Obese Class V (Super Obese)';
  if (bmi>60) z= 'Obese Class VI (Hyper Obese)';
  obj.value=bmi
  obj.category=z
return obj
}
