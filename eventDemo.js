const evEntemiter=require('events')
const { EventEmitter } = require('stream')

class Myenvet extends EventEmitter{

}




const myevent=new Myenvet();
//make the object to listen event
myevent.on('event',()=>console.log('event fire'))
//excute the listened event
myevent.emit('event');
myevent.emit('event');
myevent.emit('event');
myevent.emit('event');
