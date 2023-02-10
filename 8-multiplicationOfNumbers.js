// 1*2*3*4*5*6*7
function factorial(number) {
  let multiplication = 1;
  for (let i = 1; i <= number; i++) {
    multiplication = multiplication * i;
    console.log(i, multiplication);
  }
  return multiplication;
}
factorial(7);
