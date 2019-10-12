function minimalMultiple(divisor, lowerBound) {
  while (lowerBound % divisor) {
    lowerBound++;
  }
  return lowerBound;
}

const divisor = 5,
  lowerBound = 12;

console.log(minimalMultiple(divisor, lowerBound));
