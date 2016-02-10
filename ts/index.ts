/// <reference path="typings/main.d.ts" />
var through = require("through2");
module.exports = () => {
    return through.obj(function(file, enc, cb) {
        return cb(null, file); //run callback function to signal end of plugin process.
    });
};
