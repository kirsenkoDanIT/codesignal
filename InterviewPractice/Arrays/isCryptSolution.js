function isCryptSolution(crypt, solution) {
  const result = crypt.reduce((acc, item) => {
    const arr = item.split('');
    arr.forEach((val, i, array) => {
      solution.forEach(element => {
        if (val === element[0]) {
          array[i] = element[1];
        }
      });
    });
    acc.push(arr.join(''));

    return acc;
  }, []);

  let zeros = [];
  result.forEach(item => {
    zeros.push(...item.match(/^\d0*/g));
  });
  console.log(zeros);
  if (
    (zeros[0] === zeros[1] && zeros[1] === zeros[2] && zeros[2].length === 1) ||
    (result[0][0] !== '0' && result[1][0] !== '0' && result[2][0] !== '0')
  ) {
    return +result[0] + +result[1] === +result[2];
  }
  return false;
}
const crypt = ['A', 'A', 'A'];
const solution = [['A', '00']];

console.log(isCryptSolution(crypt, solution));

// example

// function isCryptSolution(crypt, solution) {
//     const [a, b, c] = crypt;
//     const map = {};
//     solution.forEach((item) => map[item[0]] = +item[1])

//     const convert = (n) => {
//         if (!map[n[0]] && n.length > 1) return NaN;
//         return +n.split('').map(l => map[l]).join('')
//     }

//     return convert(a) + convert(b) === convert(c);
// }

