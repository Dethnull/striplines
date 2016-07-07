# StripLines - Stripe Lines with Ease
A super simple library to remove the first X lines from an inputstream. Best of all, it only uses core Nodejs, no 3rd party dependencies!

## Installation
```
npm install striplines --save
```

## Usage
Here is a basic example showing how to remove lines from a file and pipe it to another file.

```js
"use strict";

var striplines = require('striplines');

var fs = require('fs');

var input = fs.createReadStream('./input.txt');
var output = fs.createWriteStream('./output.txt');

input
    .pipe(striplines(10))
    .pipe(output);
```

## How it works
This is a simple use of Stream.Transform. All this is really doing is breaking the input chunk into an array separated by found new line characters ('\n'). It then uses Array.shift() until the removed amount reaches the amount you specified.


It's that simple.


##License
MIT

