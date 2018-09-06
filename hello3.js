var fr=require('fs');

function f3()
{
    fr.readFile('hello.json',(alpha,data)=>{    //asynchronous file reading,alpha denotes the error while reading the file and is for catching the exception and not hadling the exception and data tells the data that is to be extracted from the file
        console.log(alpha);
        if(aplha) throw alpha;
        console.log(JSON.parse(data));

    });

}

f3();