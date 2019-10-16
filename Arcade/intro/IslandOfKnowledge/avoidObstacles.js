function avoidObstacles(inputArray) {
  for (let i = 1; ; i++) {
    let found = true;
    for (let k = 0; k < inputArray.length; k++) {
      if (inputArray[k] % i === 0) found = false;
    }

    if (found) return i;
  }
}

// const inputArray = [5, 3, 6, 7, 9];
const inputArray = [999, 1000];
console.log(avoidObstacles(inputArray));

// function avoidObstacles(arr) {
//   for (var n = 1; ; n++) if (arr.every(x => x % n)) return n
// }

// function avoidObstacles(inputArray) {
//   var jump = 2;
//   while (inputArray.some((obstacle) => obstacle % jump == 0)) {
//     jump++;
//   }
//   return jump;
// }
