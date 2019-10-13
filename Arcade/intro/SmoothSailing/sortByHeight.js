function sortByHeight(a) {
  const a1 = a.filter(item => item !== -1).sort((x, y) => x - y);

  a.forEach((item, index) => {
    if (item === -1) {
      a1.splice(index, 0, -1);
    }
  });

  return a1;
}
const a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));
