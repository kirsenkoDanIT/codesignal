function isIPv4Address(inputString) {
  let a = inputString.split('.');
  a.length !== 4
    ? false
    : (a = a.filter(
        item => item === '0' || (+item >= 0 && +item <= 255 && +item != '')
      ));
  return a.length === 4;
}
const inputString = '172.16.254.1';
console.log(isIPv4Address(inputString));
