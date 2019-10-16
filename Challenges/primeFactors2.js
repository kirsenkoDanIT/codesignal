function primeFactors2(n) {
  const result = [];
  const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  for (let i = 2; i < n; i++) {
    if (!(n % i)) {
      if (isPrime(i)) {
        result.push(i);
      }
    }
  }
  return result;
}
const n = 100000;
console.log(primeFactors2(n));
