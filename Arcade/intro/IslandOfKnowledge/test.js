const arr = [[1, 1, 1], [1, 7, 1], [1, 1, 1]].flat();

// let k = arr.slice(3);
let i = 0;
while (i < arr.length - 3) {
  let k;
  if (i < arr.length - 3) {
    k = arr.slice(i, i + 3);
    i++;
    console.log(i, k);
    console.log(arr);
  }
}

// console.log(arr);
// console.log(k);
