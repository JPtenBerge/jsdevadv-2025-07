import fs from 'fs';

console.log('begin');

// fs.readFile('./boek.txt', 'utf8', (err, content) => {
//     console.log('content binnen:', content);
// });

setTimeout(() => {
    console.log('timeout klaar');
});

for (let i = 0; i < 50000; i++) {
    console.log('i:', i);
}

console.log('eind');