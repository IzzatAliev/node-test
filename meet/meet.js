// const a = 5
// const b = '5'
// console.log(a==b)
// console.log(a===b) //compare type 

// const object = {
//     id:1,
//     name: 'kiril',
//     age: 19,
//     info: {
//         weight:50,
//         height: 180
//     }
// }

// console.log(object.hasOwnProperty('name')) // true
// console.log('name' in object) // true

// bind, call(), apply(accept array)

// const student = {
//     id:1,
//     firstName:'kiril',
//     lastName: 'norok',
//     fullName: function(){
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// const anton = {
//     firstName: 'anton',
//     lastName: 'popok'
// }

// let fullName = student.fullName.bind(anton)

// console.log(fullName())


// promise and async/await and callback

// const square = function(a){
//     return a*a;
// }

// const myName = function(a,b, callback){
//     const c = a+b
//     return callback(c)
// }

// console.log(myName(2,3,square))

// setTimeout(()=>{ console.log('hello')},2000)
