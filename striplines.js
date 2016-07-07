"use strict";

var Transform = require('stream').Transform;
var util      = require('util');

function StripLines(numOfLines) {
    if (!(this instanceof StripLines)) {
        return new StripLines(numOfLines);
    }
    Transform.call(this);
    this._numOfLines = numOfLines || 1;
    this._removed    = 0;
}

util.inherits(StripLines, Transform);

StripLines.prototype._transform = function (chunk, encoding, done) {

    if (this._removed != this._numOfLines) {
        var lines = chunk.toString().split('\n');
        var len   = lines.length;

        while (len--) {
            if (this._removed == this._numOfLines) break;
            this._removed++;
            lines.shift();
        }

        this.push(lines.join('\n'));
    } else {
        this.push(chunk);
    }

    done();
};

module.exports = StripLines;