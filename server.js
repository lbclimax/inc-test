#!/usr/bin/env node

var net = require('net');
var id = 1 ;

var server = net.createServer(function(socket) {
	
	let uid = id++;
	
	console.log(`client conected with id  ${uid} `)
	
	socket.on('data',(data)=>{
		
		console.log(`>>${uid}:${data.toString()}`);
	})

	socket.on("error",(err)=>{
		console.log("error occured on client id ",uid);
		console.log(err.stack);

	})

	
	
	socket.pipe(socket);
	
});
server.listen(8081, '0.0.0.0');

server.on('error',(err)=>{
	console.log('server error occured ');
	console.log(err.stack);
});

