# clickerheroes-format

Format large numbers just as ClickerHeroes does.

## Example

``` javascript
const format = require('clickerheroes-format');

format(1e5);
// => '100K'
```

## Installation

``` bash
$ npm install clickerheroes-format
```

## API

``` javascript
const format = require('clickerheroes-format');
```

### `format(n)`

Format _Number_ `n` as a _String_ abbreviated with the same units that
ClickerHeroes uses.
