'use strict';

// encapsulation in JS
// - closures
// - private conventie met _ of __
// - echt private met #
// - getter/setter
// - Proxy
// - Reflect/Object.defineProperty()
// - Reflect/Object.preventExtensions()/.freeze()

class Human {
    _age;
    #age; // <== dit is meer typesafe dan C# of Java

    constructor(age) {
        this.#age = age;
    }

    get birthYear() {
        return new Date().getFullYear() - this.#age - 1;
    }

    set birthYear(value) {
        this.#age = new Date().getFullYear() - value - 1;
    }
}
let danny = new Human(20);

// danny._age = 45;
// danny.#age = 2345;

// (someObj.bla as any).ietsTeDoen


console.log(danny.birthYear);
danny.birthYear = 1997;
console.log(danny.birthYear);


let obj = { x: 24, y: 'hoi' };
Object.defineProperty(obj, 'z', { writable: false, value: 99 });
console.log(obj);
// obj.z = 'WHOA';
// console.log(obj);

// Object.preventExtensions(obj);
Object.freeze(obj);

// obj.x = 123456;
obj.nieuwiets = 123;

