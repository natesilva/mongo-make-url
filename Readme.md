
# mongo-make-url

  Make complex MongoDB URLs from a friendly JSON object. Especially helpful for
  replica set URLs.

## Installation

`$ npm install mongo-make-url`

## Usage

```js
var makeUrl = require('mongo-make-url');

var config = {
  "user": "dave",
  "password": "openDoors",
  "hosts": [ "host01", "host02", "host03:9999" ],
  "db": "hal",
  "options": {
    "w": 1,
    "replicaSet": "rsName"
  }
};

var url = makeUrl(config);

// url is:
// mongodb://dave:openDoors@host01,host02,host03:9999/hal?w=1&replicaSet=rsName
```

## License

(The MIT License)

Copyright (c) 2012 Nate Silva &lt;nate@natesilva.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.