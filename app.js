var nb = require("vim-netbeans");
var server = new nb.VimServer();
server.on("clientAuthed", function (vim) {
    vim.on("insert", function (buffer, offset, text) {
			console.log('sdsd');
        console.log("Inserted text at " + offset + ": " + text);
    });

    vim.on("remove", function (buffer, offset, length) {
        console.log("Removed " + length + " bytes at " + offset);
    });
});
server.listen();
