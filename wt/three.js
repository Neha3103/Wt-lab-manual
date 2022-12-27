const readline=require("readline");
const readLine=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var http = require('http'); 
const { appendFile } = require("fs");

var server = http.createServer(function (req, res) {  
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });         
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();    
    }
    else if (req.url == "/student") {        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();    
    }
    else if (req.url == "/admin") {        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();    
    }
    else
        res.end('Invalid Request!');

    
});
readLine.question("Enter Search value: ",function(x){
    server.listen(x);
});
console.log('Node.js web server at port 8000 is running..')
