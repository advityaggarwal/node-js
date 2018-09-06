var exp=require('express');
var parser =require('body-parser');
var app=exp();  //instead of http we are using express here



//CRUD oprations in node express
//create is analogous to post
//read is analogous to get
//update is analogous to put
//delete is analaogous to delete
app.get('/rest/api/readbyid/:id',(req,res)=>{
    /* var x=req.params['name']; */res.send('Hello REST '+req.params['id'])});  //rest/api/read is the url


app.use(parser.json());
app.post('/rest/api/readbyname/:name',(req,res)=>{
    /* var x=req.params['name']; */res.send('Hello REST '+req.params['name'])});  //rest/api/read is the url


app.put('/rest/api/readbyage/:age',(req,res)=>{
    /* var x=req.params['name']; */res.send('Hello REST '+req.params['age'])});  //rest/api/read is the url



app.delete('/rest/api/readbyname/:name',(req,res)=>{
    /* var x=req.params['name']; */res.send('Hello REST '+req.params['name'])});  //rest/api/read is the url

        


app.listen(8081,()=>{console.log('Express Started')})

