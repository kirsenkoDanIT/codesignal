function reverseInParentheses(inputString) {
  const regexp = /\(([a-z]*)\)/;
  const str = (_, str) => [...str].reverse().join('');

  while (inputString.includes('(')) {
    inputString = inputString.replace(regexp, str);
  }
  return inputString;
}
// function reverseInParentheses(s) {
//   for (var i = 0; i < s.length; i++) {
//     if (s[i] === ')') {
//       s = s.substring(0, i) + s.substring(i + 1);
//       i--;
//       var reversed = '';
//       while (s[i] !== '(') {
//         reversed += s[i];
//         s = s.substring(0, i) + s.substring(i + 1);
//         i--;
//       }
//       s = s.substring(0, i) + reversed + s.substring(i + 1);
//       i += reversed.length - 1;
//     }
//   }
//   return s;
// }

// not ended

// function reverseInParentheses(inputString) {
//   const arr = [];
//   let subStr;
//   for (let i = 0; i < inputString.length; i++) {
//     if (inputString[i] === '(') {
//       for (let j = i; j < inputString.length; j++) {
//         if (inputString[j] === ')') {
//           subStr = inputString.slice(i + 1, j);
//           arr.push(subStr);
//           break;
//         }
//       }
//     }
//   }

//   arr.forEach(item => {
//     console.log(`(${item})`);
//     inputString = inputString.replace(
//       `(${item})`,
//       item
//         .split('')
//         .reverse()
//         .join('')
//     );
//   });

//   return inputString;
// }

const s = 'foo(bar(baz))blim';
console.log(reverseInParentheses(s));
