var nb = require("vim-netbeans");
var server = new nb.VimServer();
var currentFile ='';
server.on("clientAuthed", function (vim) {
	console.log('client authenticated');
	vim.on("insert", function (buffer, offset, text) { console.log('sdsd');
			console.log("Inserted text at " + offset + ": " + text);
	});
	vim.on("remove", function (buffer, offset, length) {
			console.log("Removed " + length + " bytes at " + offset);
	});
	vim.on("newBuffer", function (buffer) {
		buffer.startDocumentListen();
		//console.log(buffer);
	});
	vim.on("fileOpened", function(pathname){
		console.log('this is the file open handler');
		console.log(pathname);
		currentFile = pathname;
		currentFile = getFilename(pathname);
		console.log(currentFile);
	});
	vim.key("C-o", function (buffer, offset, lnum, col) {
		// insert a timestamp before the current line
		console.log("edit buffer");
		// get location of testfile from package json
		buffer.editFile('/Users/anzumana/Documents/git/jvd/__tests__/' +currentFile);
		//var num = new Date().toString();
		//buffer.insert(offset - col, num);
	});
	/**
		* Switch between implementation and itest file 
		*
	*/

	vim.key("C-t", function (buffer, offset, lnum, col) {
		console.log("edit buffer");
		console.log(buffer.pathname);
		if(buffer.pathname.indexof('__tests__/')!== -1){
			//go to test file
		} else{
			//go to implementation file
		}
		//buffer.setFullName('/Users/anzumana/Documents/git/jvd/__tests__/' +currentFile);
	});
	function getFilename(pathname){
		console.log('getFilename');
		console.log(pathname + 'asdasd');

		if(typeof(pathname) ==="string"){
			console.log(pathname);
			var array = pathname.split('/');
			var name = array[array.length-1];
			return name 
		} if(pathname.pathname !== undefined){
				var array = pathname.pathname.split('/');
				var name = array[array.length-1];
				return name 
		}else{
			return 'dummy'
		}
		
	}
	

});
server.listen();
