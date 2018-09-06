



var http=require('http');

http.createServer(
    function(req,res)
    {
        res.writeHead(200,{'Content-type':'text/html'});
        res.write("UserName<input type='text' name='user' id='username'><br>");
        res.write("Password<input type='password' name='password' id='password'>");
        res.write("<input type='submit' name='submit' value='Submit'>");
        res.end();

    }
).listen(8081/* ,()=>{console.log("running");} */)