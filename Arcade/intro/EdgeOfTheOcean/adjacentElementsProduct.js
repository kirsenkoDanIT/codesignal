function adjacentElementsProduct(inputArray) {
  let max = inputArray[0] * inputArray[1];
  max = inputArray.reduce((acc, item, index, array) => {
    if (array[index + 1]) {
      acc = Math.max(acc, array[index + 1] * item);
    }
    return acc;
  }, max);
  return max;
}
const inputArray = [-1, -2];
console.log(adjacentElementsProduct(inputArray));

// example

// function adjacentElementsProduct(arr) {
//   return Math.max(...arr.slice(1).map((x, i) => x * arr[i]));
// }
