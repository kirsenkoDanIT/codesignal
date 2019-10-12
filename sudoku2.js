function sudoku2(grid) {
  const result = array =>
    array.map(element => {
      const duplicate = element.find((item, index) => {
        if (item !== '.') {
          return index !== element.indexOf(item);
        }
      });
      return duplicate ? false : true;
    });
  const resultRow = result(grid);

  const rotateArray = (array, size1, size2) => {
    for (let i = 0; i < size1; i++) {
      for (let j = i + 1; j < size2; j++) {
        const k = array[j][i];
        array[j][i] = array[i][j];
        array[i][j] = k;
      }
    }
  };

  const size = 3;

  let newGrid = grid.map(item => {
    const arr = [];
    for (let index = 0; index < item.length / size; index++) {
      arr[index] = item.slice(index * size, index * size + size);
    }
    return arr;
  });
  rotateArray(newGrid, 3, 9);
  newGrid = newGrid
    .map(val => val.reduce((acc, val) => acc.concat(val), []))
    .slice(0, 3)
    .map(item => {
      const arr = [];
      for (let index = 0; index < item.length / 9; index++) {
        arr[index] = item.slice(index * 9, index * 9 + 9);
      }
      return arr;
    });
  console.log(newGrid);
  const resultNewGrid = result(newGrid);
  rotateArray(grid, grid.length, grid.length);

  const resultColumn = result(grid);

  if (
    resultRow.includes(false) ||
    resultColumn.includes(false) ||
    resultNewGrid.includes(false)
  ) {
    return false;
  }
  return true;
}

const grid = [
  ['.', '.', '.', '.', '.', '.', '5', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['9', '3', '.', '.', '2', '.', '4', '.', '.'],
  ['.', '.', '7', '.', '.', '.', '3', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '3', '4', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '5', '2', '.', '.']
];

console.log(sudoku2(grid));
