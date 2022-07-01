// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("anything", (data) => {
//   console.log('On Event anything ', data);
// });

// emitter.emit("anything", {
//   id: 1,
//   name: "kiril",
// });

// emitter.emit("anything", {
//   id: 2,
//   name: "oleg",
// });

// setTimeout(() => {
// emitter.emit("anything", {
//     id:3,
//     name: 'olga'
// })
// }, 2000)


// class Dispatcher extends EventEmitter{
//     subscribe(eventName, callback){
//         console.log('subsciber')
//         this.on(eventName,callback)
//     }

//     dispatcher(eventName, data){
//         console.log('dispatcher')
//         this.emit(eventName, data)
//     }
    
// }

// const eventt = new Dispatcher()

// eventt.subscribe('anything',(data)=>{
//     console.log('on subscibe ', data)
// })

// eventt.dispatcher('anything', {
//     id:1,
//     name:'kiril'
// })