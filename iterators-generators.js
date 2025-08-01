// iterators
let jp = {
  name: "JP",
  favorieteChips: ["Nibb-it rings", "Wokkels Paprika"],
  favorieteDranken: ["Sprite", "Extran"],
  [Symbol.iterator]() {
    let alles = [...this.favorieteChips, ...this.favorieteDranken];
    let index = 0;
    return {
      next() {
        return {
          value: alles[index],
          done: ++index > alles.length,
        };
      },
    };
  },
};

for (let favorietDing of jp) {
  console.log(favorietDing);
}

// generators: makkelijk aanmaken van een iterator
// - met iets meer controle
function* gen() {
    console.log('eerste');
    yield 4;
    console.log('tweede')
    yield 8;
    console.log('derde')
    yield 15;
    console.log('vierde')
    yield 16;
    console.log('vijfde')
    yield 23;
    console.log('zesde')
    yield 42;
}
// for (let item of gen()) {
//     console.log('gen item:', item);
// }

let source = gen();
console.log(source.next());
console.log(source.next());
console.log(source.next());

console.log('============');

let jp2 = {
  name: "JP",
  favorieteChips: ["Nibb-it rings", "Wokkels Paprika"],
  favorieteDranken: ["Sprite", "Extran"],
  *[Symbol.iterator]() {
    yield* this.favorieteChips;
    yield* this.favorieteDranken;
  },
};

for (let favorietDing of jp2) {
  console.log(favorietDing);
}


function* traverse(node) {
    yield* node.left;
    yield node.value;
    yield* node.right;
}


