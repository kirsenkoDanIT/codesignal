function reverseInParentheses(inputString) {
  while (inputString.includes('(')) {
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === '(') {
        for (let j = i + 1; j < inputString.length; j++) {
          if (inputString[j] === '(') {
            break;
          } else if (inputString[j] === ')') {
            let subStr = inputString.slice(i + 1, j);
            inputString = inputString.replace(
              `(${subStr})`,
              subStr
                .split('')
                .reverse()
                .join('')
            );
            break;
          }
        }
      }
    }
  }

  return inputString;
}

const s = 'foo(bar(baz))blim';
console.log(reverseInParentheses(s));

// function reverseInParentheses(inputString) {
//   const regexp = /\(([a-z]*)\)/;
//   const str = (_, str) => [...str].reverse().join('');

//   while (inputString.includes('(')) {
//     inputString = inputString.replace(regexp, str);
//   }
//   return inputString;
// }

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

// r = /\((\w*)\)/g
// f = reverseInParentheses = s => r.test(s) ? f(s.replace(r, (m, a) => Buffer(a).reverse())) : s
