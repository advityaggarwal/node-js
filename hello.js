

var fr=require('fs');
var ab =require('./module.js');
var x=(req,res)=>{res.write('Hi');
var y=(JSON.parse(fr.readFileSync('hello.json')));
res.write(y);
res.write(JSON.parse(fr.readFileSync('hello.json')));
res.end();}

var http=require ('http');
http.createServer
    (x).listen(8081,()=>{console.log("running");
})
