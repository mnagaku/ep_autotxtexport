var getPadPlainText = require('./ExportHelper').getPadPlainText;
var fs = require("fs");

exports.autotxtexport = function(hook_name, args, cb) {
    var txt = getPadPlainText(args.pad);
    fs.writeFile('out.txt', txt);
}
