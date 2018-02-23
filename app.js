var nb = require("vim-netbeans");
var server = new nb.VimServer();
var currentFile ='';
server.on("clientAuthed", function (vim) {
	console.log('cliein authenticated');
	vim.on("insert", function (buffer, offset, text) { console.log('sdsd');
			console.log("Inserted text at " + offset + ": " + text);
	});
	vim.on("remove", function (buffer, offset, length) {
			console.log("Removed " + length + " bytes at " + offset);
	});
	vim.on("newBuffer", function (buffer) {
		buffer.startDocumentListen();
		console.log(buffer);
	});
	vim.on("fileOpened", function(pathname){
		console.log('this is the file open handler');
		console.log(pathname);
		currentFile = pathname;
		currentFile = getFilename(pathname);
		console.log(currentFile);
	});
	vim.key("C-i", function (buffer, offset, lnum, col) {
		// insert a timestamp before the current line
		console.log("edit buffer");
		buffer.editFile('/Users/anzumana/Documents/git/mobi_template/__tests__/' +currentFile);
		//var num = new Date().toString();
		//buffer.insert(offset - col, num);
	});
	function getFilename(pathname){
		console.log(pathname);
		var array = pathname.split('/');
		var name = array[array.length-1];
		return name 
		
	}
	

});
server.listen();
