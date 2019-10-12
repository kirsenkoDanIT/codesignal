function firstNotRepeatingCharacter(s) {
  const char = s
    .split('')
    .find((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
  return char ? char : '_';
}

const s = 'abadcabcad';
console.log(firstNotRepeatingCharacter(s));