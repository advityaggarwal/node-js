var exp=require('express');
var parser =require('body-parser');
var app=exp();
var cors=require('cors');
var fr=require('fs');
var MongoClient=require('mongodb').MongoClient;
var operations=require('./module1.js');

app.use(parser.json());
app.get('/rest/api/read',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*"),
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept"),
    res.json({"name":"alpha"})
});


app.post('/rest/api/read',(req,res)=>
{
    res.header("Access-Control-Allow-Origin","*"),
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept"),
    console.log("abcd");
    //res.send(req.body);
    
    
    //storing the values in the local file in the same folder
    /*console.log(req.body); 
    var updates=JSON.parse(fr.readFileSync('data1.json'));
    console.log(updates);
    updates.push(req.body);
    console.log(updates);
    fr.writeFileSync('data1.json',JSON.stringify(updates));*/ 



    //storng the values in the mongo database
    //operations.inserted(req.body);
    //operations.updated(req.body);
    //operations.deleted(req.body);
    console.log(operations.search(req.body));
    res.send(operations.search(req.body));
    //operations.searchAll();




});

app.use(cors()).listen(8081,()=>{console.log('Express Started')})

