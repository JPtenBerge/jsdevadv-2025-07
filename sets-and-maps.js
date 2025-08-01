

let setje = new Set();
setje.add(123);
setje.add(123);
setje.add(123);
setje.add('123'); // ===
setje.add({});
setje.add({});
console.log(setje.size);
setje.clear(); // ipv .length = 0
// console.log(setje.values());

console.log(setje);

let func = () => {};

let mapje = new Map();
mapje.set('qwer', 123);
mapje.set('qwer', () => {});
mapje.set({}, {});
mapje.set(func, []);

let obj = {
    qwert: 1234
};
obj['❤🎂😁🤞'] = 123;
obj[{}] = 123;
console.log(obj);

console.log(mapje);


// WeakMap
// WeakSet

