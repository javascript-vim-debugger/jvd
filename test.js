const CDP = require('chrome-remote-interface');

CDP(async(client) => {
    // extract domains
    const {Debugger,Log} = client;
    // setup handlers
		try{
			await	Debugger.enable(); 

			await Debugger.setBreakpointByUrl({lineNumber:10, url:'http://localhost:3000/app.js' });
			await Debugger.setBreakpointByUrl({lineNumber:22, url:'http://localhost:3000/app.js' });
			//await	Debugger.setBreakpointsActive({active:false});
		}
		catch(err){
			console.log(err);
		}
		finally{
		}
})
.on('error', (err) => {
    // cannot connect to the remote endpoint
    console.error(err);
});
