var exp=require('express');
var parser =require('body-parser');
var app=exp();  //instead of http we are using express here
var fr=require('fs');
var ab =require('./module.js');
/* var y=(JSON.parse(fr.readFileSync('hello1.json')));
var f2=function(){
    var jsondata='{"name":"advitya","age":21}'
    var js=JSON.stringify(jsondata);
    //console.log(ab.date());
    fr.writeFileSync('hello.json',js);    //writing the file
    console.log(JSON.parse(fr.readFileSync('hello.json')));
} */


//CRUD oprations in node express
//create is analogous to post
//read is analogous to get
//update is analogous to put
//delete is analaogous to delete
//send and write are somewhat same but send can only be used once


//var x;
//rest/api/read is the url

app.use(parser.json());
app.post('/rest/api/readbyname/:name',(req,res)=>{
    console.log(req.body);
    fr.writeFileSync('data.json',JSON.stringify(req.body));
});

app.put('/rest/api/readbyid/:id',(req,res)=>{

    var updates=JSON.parse(fr.readFileSync('data.json'));
    updates.id=req.params.id;
    console.log(req.body);
    fr.writeFileSync('data.json',JSON.stringify(updates));

});


/* app.put('/rest/api/readbyage/:age',(req,res)=>{
    res.send('Hello REST '+req.params['age'])});  //rest/api/read is the url



app.delete('/rest/api/readbyname/:name',(req,res)=>{
    var x=req.params['name'];res.send('Hello REST '+req.params['name'])});  //rest/api/read is the url


 */
app.listen(8081,()=>{console.log('Express Started')})

