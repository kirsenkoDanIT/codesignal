function isLucky(n) {
  n = `${n}`.split('');
  const n1 = n.slice(0, n.length / 2).reduce((acc, item) => (acc += +item), 0);
  const n2 = n.slice(n.length / 2).reduce((acc, item) => (acc += +item), 0);
  return n1 === n2;
}

const n = 239017;

console.log(isLucky(n));
