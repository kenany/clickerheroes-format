# clickerheroes-format

[![Build Status](https://img.shields.io/travis/KenanY/clickerheroes-format.svg)](https://travis-ci.org/KenanY/clickerheroes-format)

Format large numbers just as ClickerHeroes does.

## Example

``` javascript
var format = require('clickerheroes-format');

format(1e5);
// => '100K'
```

## Installation

``` bash
$ npm install clickerheroes-format
```

## API

``` javascript
var format = require('clickerheroes-format');
```

### `format(n)`

Format _Number_ `n` as a _String_ abbreviated with the same units that
ClickerHeroes uses.