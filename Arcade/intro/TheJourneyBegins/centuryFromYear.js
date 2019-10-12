function centuryFromYear(year) {
  let age;
  const rest = year % 100;
  rest ? (age = Math.floor(year / 100 + 1)) : (age = year / 100);

  return age;
}

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

const year = 1988;
console.log(centuryFromYear(year));
