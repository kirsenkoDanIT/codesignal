function alternatingSums(a) {
  return (a = a.reduce(
    (acc, item, index) => {
      index % 2 ? (acc[1] += item) : (acc[0] += item);
      return acc;
    },
    [0, 0]
  ));
}
const a = [50, 60, 60, 45, 70];
console.log(alternatingSums(a));

// alternatingSums = a => a.reduce((p,v,i) => (p[i&1]+=v,p), [0,0])
