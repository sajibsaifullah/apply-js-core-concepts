function factorial(number) {
  let multiplication = 1;
  for (let i = 1; i <= number; i++) {
    multiplication = multiplication * i;
  }
  return multiplication;
}
const result = factorial(4);
console.log(result);
