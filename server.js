var exp=require('express');
var parser =require('body-parser');
var app=exp();  //instead of http we are using express here
var fr=require('fs');
var ab =require('./module.js');

app.post('/rest/api/readbyid/:id',(req,res)=>{

    var updates=JSON.parse(fr.readFileSync('data.json'));
    updates.id=req.params.id;
    console.log(req.body);
    fr.writeFileSync('data.json',JSON.stringify(updates));

});


app.put('/rest/api/readbyage/:age',(req,res)=>{
    res.send('Hello REST '+req.params['age'])});  //rest/api/read is the url



app.delete('/rest/api/readbyname/:name',(req,res)=>{
    var x=req.params['name'];res.send('Hello REST '+req.params['name'])});  //rest/api/read is the url



app.listen(8081,()=>{console.log('Express Started')})

