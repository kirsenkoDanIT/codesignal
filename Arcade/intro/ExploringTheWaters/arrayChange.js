function arrayChange(inputArray) {
  let counter = 0;
  const a = inputArray;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] < a[j]) {
        break;
      } else {
        while (a[i] >= a[j]) {
          a[j] += 1;
          counter += 1;
        }
      }
    }
  }
  return counter;
}
const inputArray = [-1000, 0, -2, 0];
console.log(arrayChange(inputArray));

// function arrayChange(series) {
//     var moves = 0;

//     for (var i = 1; i < series.length; i++) {
//         if (series[i] <= series[i - 1]) {
//             diff = series[i - 1] - series[i] + 1;
//             series[i] += diff;
//             moves += diff;
//         }
//     }

//     return moves;
// }

// function arrayChange(inputArray) {
//     return inputArray.reduce(function (x, b, i, a) {
//         while (b >= a[i + 1]) { x++; a[i + 1]++; };
//         return x;
//     }, 0)
// }
