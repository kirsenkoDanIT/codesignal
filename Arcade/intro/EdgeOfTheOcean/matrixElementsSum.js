function matrixElementsSum(matrix) {
  var count = 0;

  for (var i = 0; i < matrix[0].length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      console.log('column', i + 1);
      console.log('row', j + 1);
      console.log('number', matrix[j][i]);
      console.log('-------------------------');

      if (matrix[j][i]) {
        count += matrix[j][i];
      } else {
        break;
      }
    }
  }
  return count;
}

const matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];

console.log(matrixElementsSum(matrix));
