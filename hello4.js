var evt=require('events');
var evt1=new evt.EventEmitter();


function f1()
{
    console.log("Listener ON");
}

evt1.on('evt1',f1)  //evt1 is the event and the f1 is the listner that is the call back function that is going to be called while the event is emitteda nd f1 is the part of the array 

evt1.emit('evt1');