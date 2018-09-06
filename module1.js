var MongoClient=require('mongodb').MongoClient;





exports.updated=function(x)
{
    return MongoClient.connect('mongodb://localhost:27017/emp',
    function(err,dbvar){

        if(err)
        {
            throw err;
        }
        var col1=dbvar.db('mydb');
        col1.collection('emp').updateMany(x.val,{$set:x.body},true,function(err,res){  //if there is an error in the json file then the execution will be stopped as used true
            if(err) throw err;
            console.log("1 document updated");
            dbvar.close();
        });
        dbvar.close();
    }
    )
}




exports.inserted=function(x)
{
   return MongoClient.connect('mongodb://localhost:27017/emp',
    function(err,dbvar){

        if(err)
        {
            throw err;
        }
        var col1=dbvar.db('mydb');
        col1.collection('emp').insert(x,true,function(err,res){  //if there is an error in the json file then the execution will be stopped as used true
            if(err) throw err;
            console.log("1 document inserted");
            dbvar.close();
        });
        dbvar.close();
    }
    )
}




exports.deleted=function(x)
{
   return MongoClient.connect('mongodb://localhost:27017/emp',
    function(err,dbvar){

        if(err)
        {
            throw err;
        }
        var col1=dbvar.db('mydb');
        col1.collection('emp').remove(x,true,function(err,res){  //if there is an error in the json file then the execution will be stopped as used true
            if(err) throw err;
            console.log("1 document deleted");
            dbvar.close();
        });
        dbvar.close();
    }
    )
}
 var y="1";

exports.search=function(x)
{  
    MongoClient.connect('mongodb://localhost:27017/emp',
    function(err,dbvar){
        
        if(err)
        {
            throw err;
        }
        var col1=dbvar.db('mydb');
        col1.collection('emp').findOne(x.val,function(err,result){  //if there is an error in the json file then the execution will be stopped as used true
            if(err) throw err;
            console.log(result);
            //res.send(result.age);
            y=result;
            dbvar.close();
        });
        dbvar.close();
    }
    )
    return y;
}


exports.searchAll=function()
{
   return MongoClient.connect('mongodb://localhost:27017/emp',
    function(err,dbvar){

        if(err)
        {
            throw err;
        }
        var col1=dbvar.db('mydb');
        col1.collection("emp").find({},{ projection: { _id: 0, name: 1} }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            dbvar.close();
        });
        dbvar.close();
    }
    )
}
