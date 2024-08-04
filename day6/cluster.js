/*
Normally, node.js server runs on a single port and utilize only single core of the OS system which leads to wastage of hardware capabilities. 
So, in order to take the full use of multi-core system, we launch cluster of node.js processes to handle the load. 
This process is known as clustering. Clustering in node.js allows us to create different processes which can share the same server port. 
*/

const cluster =require("cluster");
const http=require('http');
const os=require('os');

const CpuSize=os.cpus().length;
if(cluster.isMaster){
    console.log("Master pid:"+process.pid)
    for(let i=0;i<CpuSize-2;i++){
        cluster.fork();
    }
cluster.on('exit',(worker,code,single)=>{
    console.log("Worker process died processId: "+worker.process.pid)

})
}else{
    const server=http.createServer((req,res)=>{
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("hello");

    });
    server.listen("3000",(err)=>{
        if(err) throw err;
        console.log("Application worker process Id:"+process.pid)

    })
}

/*
Working:-
Forking: When the master process calls cluster.fork(), it creates a new child process (worker).
Independent Execution: This new worker process is an entirely separate instance of your Node.js script.
Master Check: Each worker starts executing the script from the beginning. It checks the cluster.isMaster condition.
Worker Role: Since it's not the master, it enters the else block and sets up the HTTP server


Distributing incoming connections in clusters:-
We have two methods of distributing incoming connections in cluster module of node.js which are as follows :

1. Using Round-robin approach : In this approach, the master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion. 
    It also contains some built-in algorithmic smart to avoid overloading of any particular worker process. 
    This is the default approach.

2. Using Sockets : In this approach, the master process creates listen sockets and send the incoming connection to the interested worker and then the worker will accept the connection directly.


Events emitted while working with child processes are as follows :

Worker : Worker can emit any of the following event :   disconnect, error, exit, listening, message and online.
Cluster : Cluster can emit any of the following event : disconnect, exit, fork, listening, message, online and setup.

*/