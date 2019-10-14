function areSimilar(a, b) {
  if (a.join('') !== b.join('')) {
    while (b.length) {
      for (let i = 0; i < b.length; i++) {
        for (let j = i + 1; j < b.length; j++) {
          let x = b[i];
          let y = b[j];
          b[i] = b[j];
          b[j] = x;
          if (a.join('') === b.join('')) {
            return true;
          } else {
            b[i] = x;
            b[j] = y;
            break;
          }
        }
      }
      return false;
    }
  } else return true;
}
const a = [6, 4, 3, 5],
  b = [6, 3, 4, 5];
console.log(areSimilar(a, b));

//function areSimilar(A, B) {
// var different = [];
// for (var i = 0; i < A.length; i++) {
//   if (A[i] != B[i]) {
//     different.push(i);
//   }
// }
// if (different.length == 0)
//   return true;
// else
//   if (different.length == 1 || different.length > 2) {
//     return false;
//   } else
//     if ((A[different[0]] == B[different[1]]) && (A[different[1]] == B[different[0]]))
//       return true;
//     else
//       return false;
// }

// function areSimilar(a, b) {
//   const ad = a.filter((v, i) => v != b[i])
//   const bd = b.filter((v, i) => v != a[i])
//   return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
// }

// function areSimilar(a, b) {
//   sum = 0;
//   for (i = 0; i < a.length; i++) { if (a[i] != b[i]) { sum++ } }
//   a.sort(); b.sort();
//   return a.toString() == b.toString() && sum < 3
// }
