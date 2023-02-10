function getSumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    // console.log(i, element, sum);
  }
  return sum;
}

function getOddArray(numbers) {
    let oddArray = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            console.log(index, element);
            oddArray.push(element);
        }
    }
    return oddArray;
}

const myNumbers = [12, 25, 35, 50, 65, 70, 91];
const oddArray = getOddArray(myNumbers);
console.log(oddArray);

const myOddNumberArraySum = getSumArray(oddArray);
console.log(myOddNumberArraySum);
const getSum = getSumArray(myNumbers);

