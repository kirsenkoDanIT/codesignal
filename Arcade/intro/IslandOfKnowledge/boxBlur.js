function boxBlur(image) {
  const a = image;
  let b = [];
  for (let z = 0; z <= a.length - 3; z++) {
    let x = [];
    for (let k = 0; k <= a[0].length - 3; k++) {
      x.push(
        [
          ...a[z].slice(k, k + 3),
          ...a[z + 1].slice(k, k + 3),
          ...a[z + 2].slice(k, k + 3)
        ].reduce((acc, item) => {
          acc += item;
          return acc;
        }, 0)
      );
    }
    x = x.map(item => (item = Math.floor(item / 9)));
    b.push(x);
  }

  return b;
}

const image = [
  [36, 0, 18, 9, 9, 45, 27],
  [27, 0, 254, 9, 0, 63, 90],
  [81, 255, 72, 45, 18, 27, 0],
  [0, 0, 9, 81, 27, 18, 45],
  [45, 45, 227, 227, 90, 81, 72],
  [45, 18, 9, 255, 9, 18, 45],
  [27, 81, 36, 127, 255, 72, 81]
];

// const image = [[1, 1, 1], [1, 7, 1], [1, 1, 1]];
console.log(boxBlur(image));
