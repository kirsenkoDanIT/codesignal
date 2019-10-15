function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    const a = [...arguments].slice(0, 2).sort().join('');
    const b = [...arguments].slice(2).sort().join('');
    return a === b
}

const yourLeft = 10,
  yourRight = 15,
  friendsLeft = 15,
  friendsRight = 10;
console.log(areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight));
