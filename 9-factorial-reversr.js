function factorial(number) {
    let multi = 1;
    for (let i = number; i >= 1; i--){
        multi = multi * i;
    }
    return multi;
}
const result = factorial(4);
console.log(result);