function almostIncreasingSequence(sequence) {
  const result = sequence.map((item, index) => {
    const array = [...sequence];
    array.splice(index, 1);
    const found = array.find((element, index) => {
      return element >= array[index + 1];
    });
    return found ? found : true;
  });

  return result.includes(true);
}

const sequence = [1, -2];
console.log(almostIncreasingSequence(sequence));

// example

// function almostIncreasingSequence(sequence) {
//     let invalidItemsCount = 0;

//     for (let i = 1; i < sequence.length; i++) {
//         if (sequence[i] <= sequence[i - 1]) {
//             invalidItemsCount++;
//             if (invalidItemsCount > 1) return false;
//             if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
//         }
//     }

//     return true;
// }
