# Geleerd

## Vrijdagochtend over donderdag



Wat oh wat hebben we geleerd van gister?!

- Symbols
  - nutteloos
  - unieke identifiers
  - Symbol('description') (altijd nieuw) of Symbol.for('key') (get or create)
  - built-in symbols: SymboltoPrimitive, 

- Sets and Maps
  - Set: lijst met unieke waarden
  - Map: key-value pairs. 
    - vs object { x: 24 }.
      - .set()
      - complexe keys mogelijk bij Map
      - snellah
      - .size ipv Object.keys(obj).length

- Union en intersect
  - union: alles
    ```js
    let setje1 = new Set();
    let setje2 = new Set();
    let alles = new Set([...setje1, ...setje2]);
    ```
  - intersect: niet alles. Overeenkomsten.
    ```js
    let setje1 = new Set([1,2,3,4,5]);
    let setje2 = new Set([3,4,5,6,7]);
    let nietAlles = new Set([...setje1].filter(item => setje2.has(item)));
    ```

- Advanced functions
  - Closures
    - classes maar dan geen classes
    - stukje state bijhouden bij een functie
  - IIFE  Immediately Invoked Function Expression
  - `this`
    - standaard een ref naar de eigenaar van de functie
      - bij functie in functie niet meer.
    - TypeScript past automatisch dat mooie trucje toe   `let self = this;`
    - `this` instellen: `.apply()` `.bind()` (hippe Angularproject paginationcomponent  `next()` `previous()`) `.call()`
      ```html
      <ng-pagination>
        <ng-template let-next="next">
      ```

- Prototypes
  - Overerving in JS

```js
Human.prototype = {};  new Human();  new Human(); new Human(); new Human(); 
obj.prototype = {};
// generieke functies
```