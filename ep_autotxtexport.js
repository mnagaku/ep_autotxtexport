var txtexportdir = "txtexport";

var getPadPlainText = require("../../src/node/utils/ExportHelper").getPadPlainText;
var fs = require("fs");

exports.mkdirtxtexport = function(hook_name, args, cb) {
    var s = fs.statSync(txtexportdir);
    if(s == null) {
        fs.mkdirSync(txtexportdir);
    }
}

exports.autotxtexport = function(hook_name, args, cb) {
    var txt = getPadPlainText(args.pad);
    fs.writeFileSync(txtexportdir + "/" + args.pad.id + ".txt", txt);
}
