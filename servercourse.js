var exp=require('express');
var app=exp();
var cors=require('cors');
var parser=require('body-parser');
var fr=require('fs');
var url = require('url');
var MongoClient=require('mongodb').MongoClient;

var name1;

app.use(parser.json());

app.get('/rest/api/getdata/',(req,res)=>{

    res.header("Access-Control-Allow-Origin","*"),
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept"),
    MongoClient.connect('mongodb://localhost:27017/data',(err,dbvar)=>{
    if(err) throw err;
    var coll=dbvar.db('allcourses');
    coll.collection('courses').find({}).toArray(function(err,result){
        if(err) throw err;
        //let y=result;
        res.send(result);
        dbvar.close();
    })
    dbvar.close();
    })
});

app.post('/rest/api/postdata/',(req,res)=>{

    res.header("Access-Control-Allow-Origin","*"),
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept"),
    MongoClient.connect('mongodb://localhost:27017/data',(err,dbvar)=>{
    if(err) throw err;
    var coll=dbvar.db('allcourses');
    coll.collection('courses').insertOne(req.body);
    dbvar.close();
    });
   /* var dataString=JSON.stringify(req.body);
    fr.writeFileSync('courses.json',dataString);*/
});

app.delete('/rest/api/deletedata/:Name',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*"),
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept"),
    //value= url.parse(req.url, true);
    name1=req.params.Name;
    //console.log(name1);
    MongoClient.connect('mongodb://localhost:27017/data',(err,dbvar)=>{
    if(err) throw err;
    var coll=dbvar.db('allcourses');
    coll.collection('courses').deleteOne({"Name":name1});
    dbvar.close();
    });
    //res.send(req.body)
})
app.use(cors()).listen(8081,()=>{console.log('Express Started')})