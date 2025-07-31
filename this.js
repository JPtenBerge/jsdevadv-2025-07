'use strict';

// this wijst naar standaard naar de eigenaar van de functie

function Customer(name) {
  console.log("this:", this); // globalThis/window  "global object pollution"
  this.name = name;

  this.buy = () => {
    console.log("this in buy:", this);
    console.log(`Ik, ${this.name}, ga shizzle kopen!`);

    nested();

    function nested() { // gehoist binnenin buy()
      console.log("this in nested 2:", this);
    }
  };
}

let danny = new Customer("Danny");
console.log(danny);

danny.buy();
danny.buy.nested();

// let func = danny.buy;
// func();

// // .call(), .apply(), .bind()
// func.call({ name: 'Frank' }, 4, 8, 15);
// func.apply({ name: 'Frank' }, [4, 8, 15]);

// let gebindeFunc = func.bind({ name: 'Sten' });
// gebindeFunc();
// gebindeFunc();
// gebindeFunc();

// console.log(name);
