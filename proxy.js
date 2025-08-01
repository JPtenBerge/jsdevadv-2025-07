

let obj = { x: 24, y: 'hoi' };
let proxy = new Proxy(obj, {
    get(target, prop) {
        console.log('hey een get op ' + prop);
        return target[prop];
    },
    set(target, prop, value) {
        console.log('hey een set op ' + prop, value);
        target[prop] = value;
    },
});

console.log(proxy.x); // 24
console.log(proxy.y); // hoi
proxy.y = 'qwerty';
console.log(proxy.y); // qwerty

// use cases?
// - validaties
// - unittesten: GEEN
// - frontend libs: Vue   change detection

// "change detection"
// Angular   this.name = 'Kamal';   complex algoritme met zone.js  events
// React  expliciet  setState()
// Vue   Proxy
// Svelte 4   assignment detection

// products = products;

// Object.
// Reflect.
