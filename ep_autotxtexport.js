var txtexportdir = "txtexport";

var getPadPlainText = require("../../src/node/utils/ExportHelper").getPadPlainText;
var fs = require("fs");

exports.mkdirtxtexport = function(hook_name, args, cb) {
    var s = fs.stat(txtexportdir, function (err) {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.mkdirSync(txtexportdir);
            }
            else {
                console.error(err);
                process.exit(1);
            }
        }
    });
}

exports.autotxtexport = function(hook_name, args, cb) {
    var txt = getPadPlainText(args.pad);
    fs.writeFileSync(txtexportdir + "/" + args.pad.id + ".txt", txt);
}
