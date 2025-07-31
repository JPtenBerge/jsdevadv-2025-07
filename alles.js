Array.prototype.mijnSort = (() => {
  let sorters = {
    number: (data) => data.toSorted((a, b) => a - b),
    string: (data) => data.toSorted((a, b) => a.length - b.length),
  };

  return function () {
    let type = typeof this[0];
    return sorters[type](this);
  };
})();

console.log([82, 91, 4, 10, 105, 45].mijnSort());
console.log(
  ["hoi", "olifant", "scherm", "mens", "dier", "sten", "lucht"].mijnSort()
);

// console.log([ {}, 'olifant', 'scherm', 'mens', 'dier', 'sten', 'lucht'].mijnSort());
