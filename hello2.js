

var fr=require('fs');
var ab =require('./module.js');
var f2=function(){
    var jsondata='{"name":"sanyam","age":21}'
    var js=JSON.stringify(jsondata);
    console.log(ab.date());
    fr.writeFileSync('hello.json',js);    //writing the file
    console.log(JSON.parse(fr.readFileSync('hello.json')));
}


var http=require ('http');
http.createServer(
    function(req,res)
    {
        res.writeHead(200,{'content-type':'application/json'})    //200 represents the HTTP status code while the content-type represents the type of data server is sending
        res.write("Hello World");
        //res.writeHead(404,{'content-type':'text/html'})    //404 represents the HTTP status code while the content-type represents the type of data server is sending
        res.write("Hello World");
        res.write("<h1>Node JS</h1>");
        res.end();
    }
).listen(8081,()=>{console.log("running");
})

f2();