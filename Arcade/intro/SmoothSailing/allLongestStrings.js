function allLongestStrings(inputArray) {
  const maxLength = inputArray.reduce((acc, item) => {
    return Math.max(acc, item.length);
  }, 0);
  return inputArray.filter(item => item.length === maxLength);
}
const inputArray = ['aba', 'aa', 'ad', 'vcd', 'aba'];
console.log(allLongestStrings(inputArray));
