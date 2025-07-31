function test(p1 = p2, p2) {} // temporal dead zone

// closures: wanneer je een functie hebt die een stukje interne state bijhoudt
// - classes zonder classes / functionele classes
// functie + functie

const counter = () => {
  let tellertje = 0; // interne state
  return () => {
    tellertje++;
    return tellertje;
  };
};

let myFirstCounter = counter();
console.log(myFirstCounter()); // 1
console.log(myFirstCounter()); // 2
console.log(myFirstCounter()); // 3

// wrapper object
const wrapCounter = () => {
  let tellertje = 0; // interne state
  return {
    hoogOp() {
      tellertje++;
      return tellertje;
    },
    verminder() {

    }
  };
};

let mySecondCounter = wrapCounter();
console.log(mySecondCounter.hoogOp()); // 1
console.log(mySecondCounter.hoogOp()); // 2
console.log(mySecondCounter.hoogOp()); // 3

let myThirdCounter = wrapCounter();
console.log(myThirdCounter.hoogOp()); // 1
console.log(myThirdCounter.hoogOp()); // 2
console.log(myThirdCounter.hoogOp()); // 3
console.log(myThirdCounter.hoogOp()); // 3
console.log(myThirdCounter.hoogOp()); // 3
console.log(myThirdCounter.hoogOp()); // 3
console.log(myThirdCounter.hoogOp()); // 3

var self = this;


// this

// Immediately Invoked Function Expression

!function() { // function declaration (hoist) / function expression
    console.log('hallo vanaf delete function');
}();

(() => { // function declaration (hoist) / function expression
    console.log('hallo vanaf AF');
})();