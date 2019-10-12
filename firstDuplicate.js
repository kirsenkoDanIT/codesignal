
function firstDuplicate(a) {
  const result = a.find((e, i) => {
    if (i !== a.indexOf(e)) {
      return e;
    }
  });
  return result ? result : -1;
}

function firstDuplicate(a) {
  return (
    a.find((e, i) => {
      if (i !== a.indexOf(e)) {
        return e;
      }
    }) || -1
  );
}

function firstDuplicate(a) {
    for (let i of a) {
        let posi = Math.abs(i) - 1
        if (a[posi] < 0) return posi + 1
        a[posi] = a[posi] * -1
    }

    return -1
}

const a = [2, 3, 3, 2, 5, 3, 2];
console.log(firstDuplicate(a));