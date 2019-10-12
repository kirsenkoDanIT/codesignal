function rotateImage(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      let k = a[j][i];
      a[j][i] = a[i][j];
      a[i][j] = k;
    }
  }

  a.forEach(element => {
    element.reverse();
  });

  return a;
}

const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(rotateImage(a));
