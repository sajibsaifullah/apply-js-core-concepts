/* function getSumOfAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
  }
  return sum;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSumOfAnArray(myNumbers);
 */

// function sumOfArrayElement(elements) {
//   let sum = 0;
//   for (let i = 0; i < elements.length; i++) {
//     const index = i;
//     const element = elements[index];
//     sum = sum + element;
//     console.log(index, element, sum);
//   }
//   return sum;
// }

// const puttingElements = [10, 20, 30, 40, 50, 60];
// sumOfArrayElement(puttingElements);

function addArrayElement(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
    }
    return sum;
}
const getNumbers = [1, 2, 3, 4, 5];
addArrayElement(getNumbers);
