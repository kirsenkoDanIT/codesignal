function arrayMaximalAdjacentDifference(inputArray) {
  const a = inputArray;

  let result = 0;
  a.forEach((element, index, arr) => {
    element = Math.abs(element - arr[index + 1]) || 0;
    result = Math.max(result, element);
  });
  return result;
}
const inputArray = [-2, -2, -2, -2, -2];
console.log(arrayMaximalAdjacentDifference(inputArray));


// function arrayMaximalAdjacentDifference(arr) {
//     return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])))
// }