

// // promises ziiiiijjjnnnn eager

// let prom = new Promise((resolve, reject) => {
//     // definieer async werk
//     console.log('timeout starten');
//     setTimeout(() => {
//         console.log('timeout klaar!');
//         reject('oh nee!');
//         resolve(4);
//         resolve(8);
//         resolve(15);
//         resolve(16);
//         resolve(23);
//         resolve(42);
//         console.log('huh')
//     }, 2000);
// });

// prom
//     .then(result => console.log('eindelijk 2!', result))
//     .catch(err => console.log('Oh oh', err));

// setTimeout(() => {
//     console.log('thennen');
//     prom.then(result => console.log('eindelijk 1!', result));
// }, 5000);


// prom.then(result => console.log('eindelijk 3!', result));
// prom.then(result => console.log('eindelijk 4!', result));
// prom.then(result => console.log('eindelijk 5!', result));

// built-in:
// - fetch()

// let request = await fetch('api/products'); // metadata
// let json = await request.json(); // body



// fetch('api/products').then(x => x.json()).then(products => {

// });


// APIs aanspreken
// HTTP-request ====> server
// fetch('api/products')  JSON
// de techniek van een berichtje naar een 
// server toesturen vanuit JavaScript

// HTML  XHTML  HTML5

// Asynchronous JavaScript And JSON
// - Griekse held
// - schoonmaakmiddel
// - brandblusser
// - die dude uit Deadpool

let promises = [
    new Promise((res, rej) => setTimeout(() => rej('eerste'), 1000)),
    new Promise(res => setTimeout(() => res('tweede'), 3000)),
    new Promise(res => setTimeout(() => res('derde'), 800)),
];

Promise.allSettled(promises).then(results => console.log(results));