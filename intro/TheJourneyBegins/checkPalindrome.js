function checkPalindrome(inputString) {
  const newString = inputString
    .split('')
    .reverse()
    .join('');
  return newString === inputString;
}
const inputString = 'a';
console.log(checkPalindrome(inputString));
