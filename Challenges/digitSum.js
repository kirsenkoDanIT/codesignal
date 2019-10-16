function digitSum(n) {
  return `${n}`.split('').reduce((acc, item) => (acc += +item), 0);
}
const n = 111;
console.log(digitSum(n));
