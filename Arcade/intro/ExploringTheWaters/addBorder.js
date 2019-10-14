function addBorder(picture) {
  const line = '*'.repeat(picture[0].length + 2);
  picture = picture.map(item => `*${item}*`);
  picture.push(line);
  picture.unshift(line);
  return picture;
}
const picture = ['abc', 'ded'];
console.log(addBorder(picture));

// function addBorder(picture) {
//     var width = picture[0].length + 2;
//     return [
//         '*'.repeat(width),
//         ...picture.map(line => `*${line}*`),
//         '*'.repeat(width)
//     ];
// }
