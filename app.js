//require { createStore } from 'redux'
var createStore = require('redux').createStore;

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
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
