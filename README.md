# NFC Phones List
A list of NFC phones and tablets. [Demo here](http://opn.to/r/nfc-phones-list).

## Installation

The `nfc-phones-list` package can be installed through [npm](https://www.npmjs.com/package/nfc-phones-list):
```sh
npm install nfc-phones-list --save
```

Or through Bower:
```sh
bower install nfc-phones-list --save
```


Alternatively, the following files are available in the [`dist`](https://github.com/unitag/nfc-phones-list/tree/master/dist) directory:
 - `nfcList.json` JSON formated and indented nfc phones and tablets list.
 - `nfcList.min.json` JSON minified nfc phones and tablets list.


##Data

The [`data`](https://github.com/unitag/nfc-phones-list/tree/master/data) directory contains lists of phones and tablets in JSON files.

Each file contains an array of devices for a manufacturer. A device is defined by:
- `manufacturer` - Device manufacturer
- `model` - Device name
- `OS` - Device operating systems


##Example

```json
    {
        "manufacturer": "Samsung",
        "model": "Galaxy S4",
        "OS": ["Android"]
    },
```


## License

[MIT](https://github.com/unitag/nfc-phones-list/blob/master/LICENSE)
