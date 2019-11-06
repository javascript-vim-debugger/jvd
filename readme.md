# jvd
## javascript-vim-debugger 

The goal of this project is to create a great debugging experience for javascript from withing vim.  
FullStack Javascript Development from within vim should be amazing.
Hopefully we can make that happen :)

To enable chrome debugging start chrome with:
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

# submodules
We have a few different submodules that we are planning to use to make the debugger work.

## debugger - debugger.html firefox debugger
extract the state from the debugger so that we can match the state in vim

## node-vim-debugger
for debugging node scripts we will be using chrome as there is the best support for it so far

Running 7.6 version of node get it [here](https://nodejs.org/dist/v7.6.0/)
then https://github.com/sidorares/node-vim-debugger does work
## notes

There is a firefox client that can connect to the firefox debugger  https://github.com/harthur/firefox-client
 
 If you want to connect the node client to the debugger chrome has to be started using this command
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222

[FF-Remote-Control](https://github.com/FF-Remote-Control/FF-Remote-Control)
[Remote Protocol Firefox](https://firefox-source-docs.mozilla.org/remote/index.html#communication)


