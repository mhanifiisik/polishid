# Polish-uuid

> id generator with polish alphabet for javascript

## Install

```bash
npm install polish-uuid
```

OR

```bash
yarn add polish-uuid
```

## Usage

```ts
import { polishId } from 'polish-uuid';

console.log(polishId()); //=> "yg0Ź3bgoŻęŹmcQcQ9nTPW2"
```

## API

In default, the length of the id is 22.The length is a number between 23-50, otherwise it generates an id with a length of 22.

### `polishId(length: number): string`

```js
import polishId from 'polish-uuid';
console.log(polishId()); // => the length of id is 22
```

```js
import polishId from 'polish-uuid';
console.log(polishId(33)); // => the length of id is 33
```

```js
import polishId from 'polish-uuid';
console.log(polishId(100)); // => the length of id is 22
```

```js
import polishId from 'polish-uuid';
console.log(polishId(-1)); // => the length of id is 22
```
