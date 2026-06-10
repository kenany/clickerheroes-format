# clickerheroes-format

Format large numbers just as Clicker Heroes does.

## Example

```javascript
import { format } from 'clickerheroes-format';

format(1e5);
// => '100K'
```

## Installation

```bash
$ pnpm install clickerheroes-format
```

## API

```javascript
import { format } from 'clickerheroes-format';
```

### `format(n)`

Format _number_ `n` as a _string_ abbreviated with the same units that
Clicker Heroes uses.
