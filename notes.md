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

## Promises

- wrappers om async werk
- `Task` in C#, `Future` in Java

## Toffe links

- [Type hero](https://typehero.dev/explore), om je TypeScript-skills te oefenen
- [Vue gebruikt `Proxy` voor change detection](https://vuejs.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue)
- [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Understanding_the_text_format), tof lowlevel taaltje als alternatief om code in de browser te runnen
- [Frontend framework benchmarks](https://github.com/krausest/js-framework-benchmark)
