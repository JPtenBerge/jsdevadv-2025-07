let sym = Symbol('aaa');
let sym2 = Symbol('bbb');

console.log('sym == sym2', sym == sym2);
console.log('sym === sym2', sym === sym2);

let sym3 = Symbol.for('qwert'); // browser registry get or create: create
let sym4 = Symbol.for('qwert'); // browser registry get or create: get

console.log('sym3 == sym4', sym3 == sym4);
console.log('sym3 === sym4', sym3 === sym4);



// uniek te adresseren
// unique identifier
// ab738939-ba9d03-403903abdb3-393893848  GUID

console.log(sym);
console.log(sym.toString());

let obj = {
    x: 24,
    y: 'hoi',
    [sym]: 'mijn symbolische waarde',
    [sym2]: 'nog een symbolische waarde',
    toString() {
        console.log('in tostring!');
        return 'hoi';
    },
    [Symbol.toPrimitive]() {
        return 'qwert';
    }
};
console.log(obj);
console.log(obj[sym]);
console.log(obj[sym2]);

console.log(`obj: ${obj}`);