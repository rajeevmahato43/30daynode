/* Child Process
Node.js's child process module is the solution with the help of which we can create many sub-processes or child processes 
of a single process which can be used to handle the load. 
These child processes can communicate with each other using inter process communication. 
child_process module is also used to access operating system functionalities by running OS commands inside child processes. 
We can control the input stream as well as the output stream of the child processes. 
We can also control the arguments to be passed to underlying OS commands.
Also , pipes for stdin , stdout and stderr are established between the parent and the child node.js process by default.
Creating Child processes
There are four different ways for creating child processes :

spawn()
fork()
exec()
execFile()
Child processes can be created asynchronously or synchronously depending upon the requirements.
Asynchronous methods create the child process without blocking the event loop.
Synchronous methods creates the child process but blocks the event loop until the child process is either exits or is terminated.


fork()
    Creates a new Node.js process.
    Shares the same codebase and memory with the parent process.
    Ideal for creating worker processes within a Node.js application.
    Think of it as creating a copy of your current Node.js application, but running it independently.
spawn()
    Creates a new process to execute an external program.
    Completely independent from the parent process, with its own memory space.
    Ideal for running external commands or scripts.
    Think of it as starting a completely new program, separate from your Node.js application.
exec()
    Similar to spawn(), but simplifies the process by capturing the output of the command.
    Less control over the child process compared to spawn().
    Useful for simple command execution and capturing the result.
    Think of it as running a command and getting its output without much interaction.
execFile()
    Like exec(), but executes a specified file directly without using a shell.
    More secure than exec() as it avoids potential shell injection attacks.
    Less flexible than exec() as it lacks shell features.
    Think of it as running a specific file without involving a shell.

Key differences:
fork() creates a new Node.js process with shared codebase.
spawn(), exec(), and execFile() create external processes with their own memory space.
spawn() offers the most control over the child process.
exec() and execFile() are simpler but have limitations.

*/
/*
                child_process.spawn() :
Syntax :									
child_process.spawn(command[, args][, options])
                                        	
                                    	
Parameters :
    command : Type is string . It specifies the command to run.
    args : Type is array . It specifies ist of string arguments
    object : Type is object .It may contains one or more of the following :
        cwd
        env
        argv0
        stdio
        detached
        uid
        gid
        shell
        windowsVerbatimArguments
        windowsHide
returns : childProcess
*/

var cp = require('child_process');

for (var i = 1; i < 2; i++) {
    var worker = cp.spawn('node', ['slave.js', i]);

    worker.stdout.on('data', function (data) {
        console.log('Value of Stdout : ' + data);
    });

    worker.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    worker.on('close', function (code) {
        //console.log("Exit code : " + code);
        console.log('child process exited with code ');
    });
}



/*
                child_process.fork() :
Syntax :											
child_process.fork(modulePath[, args][, options])
                                        	
Parameters :
    modulePath : Type is string . It specifies the command to run.
    args : Type is array . It specifies ist of string arguments
    options : Type is object .It may contains one or more of the following :
        cwd
        env
        execPath
        execArgv
        silent
        stdio
        uid
        windowsVerbatimArguments
        windowsHide
returns : childProcess
*/


for (var i = 1; i < 2; i++) {
    var worker = cp.fork("slave.js", [i]);

    worker.on('close', function (code) {
        console.log('child process exited with code ' + code);
    });
}




/*
           child_process.exec() :
Syntax :											
child_process.exec(command[, options][, callback])
                                       	

Parameters :
   command : Type is string . It specifies the command to run.
   options : Type is object .It may contains one or more of the following :
       cwd
       env
       encoding
       shell
       timeout
       maxBuffer
       killSignal
       uid
       gid
       windowsHide
callback :
   error
   stdout
   stderr
returns : childProcess												
*/
for (var i = 1; i < 2; i++) {
    var workerProcess = cp.exec('node slave.js ' + i, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error Code: ' + error.code);
            console.log('Error Signal: ' + error.signal);
        }

        if (stderr) {
            console.log('value of stderr: ' + stderr);
        }

        console.log('Value of stdout: ' + stdout);


    });
    workerProcess.on('exit', function (code) {
        //console.log("exit code : "+ code);
        console.log('Child process exited ');
    });
}

/*
            child_process.execFile() :
Syntax :										
child_process.execFile(file[, args][, options][, callback])
											
										
Parameters :
    file : Type is string . It specifies the command to run.
    args :
    options : Type is object .It may contains one or more of the following :
        cwd
        env
        encoding
        timeout
        maxBuffer
        killSignal
        uid
        gid
        windowsHide
        windowsVerbatimArguments
callback :
    error
    stdout
    stderr
returns : childProcess
*/
var child = cp.execFile('node', ['--version'], (err, stdout, stderr) => {
    if (err) {
        console.log('stderr', stderr);
        throw err;
    }
    console.log('Node.js version  : ', stdout);
});



/*
Synchronous Process Creation
There are three different ways for creating child processes Synchronously :

child_process.spawnSync() : This method spawns the child process synchronously and it will block the node.js event loop.
child_process.execSync() : This method is same as child_process.exec() except that it will run synchronously and it will block the node.js event loop, pausing the execution of any other code.
child_process.execFileSync() : This method is same as child_process.execFile() except that it will run synchronously and it will block the node.js event loop, pausing the execution of any other code.


Events in child process module
Events emitted while working with child processes are as follows :

Message : This event is triggered when a child process uses process.send() method to send messages for IPC communication.
exit : This event is emitted when the child processes is ended.
error : The error event is emitted when :
    child process can not be spawned
    child process can not be killed
    Communication with the child process is not established
disconnect : This event is emitted when either the parent process calls the process.disconnect() method or subprocess.disconnect() method is called in parent process. Either way, inter-process communication is not possible after once the disconnect event is emitted.
close : This event is emitted when stdio streams of the child process is closed
*/