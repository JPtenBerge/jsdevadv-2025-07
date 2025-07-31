class B{}
class A extends B {}
console.log(new A());

// overerving

function Mammal() {
  // this.speak = function() {
  //     console.log('Aaaa');
  // };

  this.speak = function () {
    console.log(`Hallo ik mammal ben ${this.name}`);
  };
}
Mammal.prototype.speak = function() {};
new Mammal();


function Human(name) {
  this.name = name;
}
Human.prototype = new Mammal();
// Human.prototype = new Insect();

let sten = new Human("Sten");
console.log(sten);

sten.speak();

sten.__proto__ = {};
console.log(sten.__proto__);

Object.getPrototypeOf(sten);
Object.setPrototypeOf(sten, {});





// extension methods: functies toevoegen aan bestaande datatypen 

// polyfills
// als de browser een feature niet heeft, dan gaan we die 
// er neerzetten met JS
globalThis.Temporal ??= {};
String.prototype.replaceAll ??= function() {

};

Date.prototype.toPrettyString = function() {
    return `${this.getDate()}-${this.getMonth() + 1}-${this.getFullYear()}`;
};

let nu = new Date();
console.log(nu.toPrettyString());

// nu.whatever = function() {

// }

