function palindromeRearranging(inputString) {
  let s = [...inputString];

  for (let i = 0; i < s.length; i++) {
    while (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
      s.splice(s.lastIndexOf(s[i]), 1);
      s.splice(s.indexOf(s[i]), 1);
    }
  }
  return s.length <= 1;
}

const inputString = 'aaabbxxx';

console.log(palindromeRearranging(inputString));
