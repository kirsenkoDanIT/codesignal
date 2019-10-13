function commonCharacterCount(s1, s2) {
  s1 = [...s1];
  s2 = [...s2];
  let counter = 0;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        delete s2[j];
        counter++;
        break;
      }
    }
  }
  return counter;
}
const s1 = 'a',
  s2 = 'aaa';
console.log(commonCharacterCount(s1, s2));

// examples

// function commonCharacterCount(s1, s2) {
//   for (var i = 0; i < s1.length; i++) {
//     s2 = s2.replace(s1[i], "!");
//   }
//   return s2.replace(/[^!]/g, "").length;
// }
