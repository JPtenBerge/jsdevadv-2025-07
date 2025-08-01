# Notes

## Prototypes

Twee hoofdbestaansrechten van prototypes:
- Overerving
  ```js
  class A extends B {}
  class Cat extends Animal {}
  ```
- Extension methods

Prototypes in JS

- hele funtionele overerving
- dynamischer/flexibeler dan C#/Java
  - @ runtime kun je het prototype gewoon aanpassen:
    ```js
    Object.setPrototypeOf(obj, { x: 24 });
    ```


## Symbol

primitief datatype
- `number` `string` `boolean`

```js
let sym = Symbol();
```

## Sets & maps

Set: 
- unieke waardes

Map:
- unieke keys  key-value pair  dictionary hashmap hashtable

`Map` vs `{}`
- performance: zie codedocent over Map
- .size
- behoudt volgorde
- complexe keys

## Toffe links

- [Type hero](https://typehero.dev/explore), om je TypeScript-skills te oefenen
