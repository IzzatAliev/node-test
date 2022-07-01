const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const request = require("request");
const fs = require("fs");
const bodyParser = require("body-parser");
const redisStorage = require("connect-redis")(session);
const redis = require("redis");
const client = redis.createClient();
const EventEmitter = require("events");
const emitter = new EventEmitter();
const passport = require("passport");
const localStrages = require("passport-local");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const users = require("./users.json");
const Sequalize = require("sequelize");
const mysql = require("mysql2");

const host = "localhost";
const port = "8081";

const sequelize = new Sequalize("node_test", "root", "undi", {
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize.sync({ force: true })

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  }) 
  .catch((err) => {
    console.log("Smt went wrong ", err.message);
  });

  module.exports = sequelize


// app.listen(port, host, () => {
//     console.log(`Server started on ${host}${port}!!!`);
// });

//JWT AUTHORIZE

// const tokenKey = "1a2b-3c4d-5e6f-7g8h";

// app.use(express.json());
// app.use((req, res, next) => {
//   if (req.headers.authorization) {
//     jwt.verify(
      // req.headers.authorization.split(" ")[1],
//       tokenKey,
//       (err, payload) => {
//         if (err) next();
//         else if (payload)
//           for (let user of users) {
//             if (user.id === payload.id) {
//               req.user = user;
//               next();
//             }
//           }
//         if (!req.user) next();
//       }
//     );
//   }
//   next();
// });

// app.post("/api/auth", (req, res) => {
//   for (let user of users) {
//     if (req.body.login === user.login && req.body.password === user.password) {
//       return res.status(200).json({
//         id: user.id,
//         login: user.login,
//         token: jwt.sign({ id: user.id }, tokenKey),
//       });
//     }
//     return res.status(404).json({ message: 'User not found' })
//   }
// });

// app.get('/user', (req,res)=>{
//     if(req.user) return res.status(200).json(req.user)
//     else return res.status(401).json({ message: 'Not authorize' })
// })

// MESSAGE  SENDER

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'alibax1515@gmail.com',
//       pass: 'iczxcuntkvyvppyk',
//     },
//   })

//   transporter.sendMail({
//     from: '"Node js" <alibax1515@gmail.com>',
//     to: 'alibax1516@gmail.com',
//     subject: 'Attachments',
//     text: 'This message with attachments.',
//     html:
//       'This <i>message</i> with <strong>attachments</strong>.',
//     attachments: [
//       { filename: 'sirxan.jpg', path: `${__dirname}/assets/sirxan.jpg` },
//       {
//         filename: 'greetings.txt',
//         content: 'Hello',
//       },
//       { path: 'data:text/plain;base64,QmFzZTY0IG1lc3NhZ2U=' },
//       {
//         raw: `
//             Content-Type: text/plain
//             Content-Disposition: attachment;

//             Message from file.
//           `,
//       },
//     ],
//   })

//Authorize

// passport.serializeUser((user,done)=>done(null,user))
// passport.deserializeUser((user,done)=>done(null,user))

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(session({secret: 'secret key'}))
// app.use(flash())
// app.use(passport.initialize())
// app.use(passport.session())

// passport.use(new localStrages((user,password,done)=>{
//     if(user !== 'test_user')
//     return done(null, false,{ message: 'User not found'})
//     else if(password !== 'test_password')
//     return done(null,false, { message: 'Password is wrong' })
//     return done(null, { id: 1 , name: 'Test', age:21})
// })
// )

// app.use((req,res,next)=>{
//     if(req.user) next()
//         else res.redirect('/login')
// })

// app.get('/login',(req,res)=>{
//     res.send('Login page.please authorize')
// })

// app.post('/login', passport.authenticate('local', { successRedirect: '/home', failureRedirect: '/login', failureFlash: true }))

// app.get('/home', checkAuth(), (req,res)=> {
//     res.send('Home page.You`re authorized')
// })

// function checkAuth(){
//     return app.use((req,res,next)=>{
//         if(req.user) next()
//         else res.redirect('/login')
//     })
// }

// EventEmitter

// emitter.on('message', message => {
//     console.log('Message ', message)
// })

// emitter.on('error', error => {
//     console.log('Error ', error)
// })

// emitter.emit('message', 'Node-js EventEmitter in action')

// FLASH MESSAGE

// app.use(cookieParser('secret key'))
// app.use(session({ cookie: { maxAge: 3600 * 24 } }))
// app.use(flash())

// app.get('/get-flash', (req,res)=>{
//     console.log('Flash: ', req.flash('message'))
//     res.send('get flash')
// })

// app.get('/set-flash', (req,res)=>{
//     req.flash('message', { from: 'Me', to: 'You' })
//     req.flash('warning', 'Important!')
//     res.send('set flash')
// })

// SESSION SAVE TO REDIS

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(session({
//     store: new redisStorage({
//         host: host,
//         port: 6379,
//         client:client,
//         ttl: 3600000
//     }),
//     secret: 'you secret key',
//     saveUninitialized: true
// }))

// SESSION SAVE

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

// app.use(
//     session({
//         secret:'secret key',
//         saveUninitialized: true
//     })
// )

// app.get('/', (req,res)=>{
//     console.log(req.session.showAd)
//     res.sendStatus(200)
// })

// app.post('/ad', (req,res)=>{
//     req.session.showAd = req.body.showAd
//     res.sendStatus(200)
// })

// COOKIE

// app.use(cookieParser('secret key'))

// app.get('/get-cookie', (req,res)=>{
//     console.log('cookie: ', req.cookies)
//     res.send('get cookie')
// })

// app.get('/set-cookie', (req,res)=>{
//     res.cookie('token', '1234tgf', {
//         maxAge: 3600* 24,
//         secure: true
//     })
//     res.send('set cookie')
// })

// REQUEST TO ANOTHER SERVER

// app.get('/home', (req,res)=>{
//     request({
//         method: 'DELETE',
//         url: 'http://example.com/api'
//     },
//     (err,response,body)=>{
//         if(err) return res.status(500).send({message: err})
//         return res.send(body)
//     }
//     )
// })

// app.get('/home', (req,res)=>{
//     request.post({
//         url: 'http://example.com/api',
//         formData: {
//             profile_image: fs.createReadStream(
//                 `${__dirname}/assets/sirxan.jpg`
//             ),
//             // detail inform
//             profile_image2: {
//                 value: fs.createReadStream(
//                     `${__dirname}/assets/sirxan.jpg`
//                 ),
//                 options: {
//                     filename: 'sirxan.jpg',
//                     contentType: 'image/jpg'
//                 }
//             },
//             // a lot of atach
//             attachments:[
//                 fs.createReadStream(`${__dirname}/assets/sirxan.jpg`),
//                 fs.createReadStream(`${__dirname}/assets/sirxan.jpg`)
//             ]
//         }
//      },
//      (err,response,body)=>{
//         if(err) return res.status(500).send( {message: err} )

//         return res.send(body)
//      }
// )
// })

// app.get('/home', (req,res)=>{
// request.post(
//       {
//         url: "https://www.instagram.com/accounts/login/",
//         form: {
//             username: 'izzat_undisputed_aliev',
//             password: 'windows1'
//         },
//       },
//       (err, response, body) => {
//         if(err) return res.status(500).send({message: err})
//         return res.send(body)
//       }
//     );
// })

// app.get('/home', (req,res)=>{
//     request('http://amazon.com/',(err,response,body)=>{
//         if(err) return res.status(500).send({ message: err })
//         return res.send(body)
//     })
// })

// MIDDLEWARE

// app.use((req,res,next)=>{
//     req.header['Cookie'] = {id:1}
//     next()
// })

// RESPONSE OBJECT

// app.get("/home", (req, res) => {
//     console.log(res.headersSent) //false
//     res.status(200).send({ message: 'ok' })
//     console.log(res.headersSent)//true
// })

// app.get("/home", (req, res) => {
//     res.status(200)
//     res.json({id:15, name:'kiril'})
//   res.end()
// })

// app.get("/home", (req, res) => {
//    return res.status(200).download(__dirname+'/assets/sirxan.jpg') //download file
// })

// app.get('/home', (req,res)=>{
//    return res.redirect(301,'/bye')
// })

// REQUEST OBJECT

// app.get("/home", (req, res) => {
//     console.log('url',req.url)
//     console.log('headers',req.headers)
//     console.log('params',req.params)
//     console.log('query',req.query)
//     console.log('path',req.path)
//   res.status(200).type("text/plaid");
//   res.send("hello");
// });

// USE ROUTES.JS
// const routes = require('./routes')

// app.use(routes)

// TYPE OF ROUTES

// app.route('/home')
// .get((req,res)=> {
//     res.status(200).type('text/plaid')
//     res.send('hello')
// })
// .post((req,res)=> {
//     res.status(200).type('text/plaid')
//     res.send('create home request')
// })
// .delete((req,res)=> {
//     res.status(200).type('text/plaid')
//     res.send('delete home request')
// })
// .put((req,res)=> {
//     res.status(200).type('text/plaid')
//     res.send('update home request')
// })

// Type of REQUEST

// localhost:8080/home or /hom
// app.get("/home?", (req, res) => {
//   res.status(200).type("text/plain");
//   res.send("Home page");
// });

// localhost:8080/home or /homes
// app.get("/home(s)?", (req, res) => {
//   res.status(200).type("text/plain");
//   res.send("Home page");
// });

// localhost:8080/home or /homeeeee
// app.get("/home+", (req, res) => {
//     res.status(200).type("text/plain");
//     res.send("Home page");
//   });

// localhost:8080/anything
// app.get("/*", (req, res) => {
//     res.status(200).type("text/plain");
//     res.send("Home page");
//   });

// GET | POST | PUT | DELETE /home
// app.all('/home',(req,res)=>{
//     res.status(200).type('text/plain')
//     res.send('hello')
// })

// With EXPRESS

// app.get('/home',(req,res)=>{
//     res.status(200).type('text/plain')
//     res.send('Home page')
// })

// app.get('/about', (req,res)=>{
//     res.status(200).type('text/plain')
//     res.send('About page')
// })

// app.post('/api/user', (req,res)=>{
//     res.status(200).type('text/plain')
//     res.send('create user page')
// })

// app.get('/api/admin', (req,res)=>{
//     res.status(200).type('text/plain')
//     res.send('create admin page')
// })

// app.use((req,res,next)=>{
//     res.status(404).type('text/plain')
//     res.send('Not Found')
//     next()
// })

// STATIC
// app.use('/photo', express.static(__dirname+'/assets')) // static file

// app.listen(port,host,()=>{
//     console.log(`Server started on ${host}${port}!!!`)
// })

// WITHOUT EXPRESS
// const http = require('http')

// const server = http.createServer((req,res)=>{
//     switch(req.method){
//         case 'GET': {
//             switch(req.url){
//                 case '/home': {
//                     res.statusCode = 200
//                     res.setHeader('Content-Type', 'text/plain')
//                     res.end('Home page\n')
//                     break
//                 }
//                 case '/about':{
//                     res.statusCode = 200
//                     res.setHeader('Content-Type', 'text/plain')
//                     res.end('About page\n')
//                     break
//                 }
//                 default:{
//                     notFound(res)
//                     break
//                 }
//             }
//             break
//         }
//         case 'POST': {
//             switch(req.url){
//                 case '/api/user':{
//                     res.statusCode = 200
//                     res.setHeader('Context-Type', 'text/plain')
//                     res.end('User created request')
//                     break
//                 }
//                 case '/api/admin':{
//                     res.statusCode = 200
//                     res.setHeader('Context-Type', 'text/plain')
//                     res.end('Admin created request')
//                     break
//                 }
//                 default:{
//                     notFound(res)
//                     break
//                 }
//             }
//             break
//         }
//         default:{
//             notFound(res)
//             break
//         }
//     }
// })

// server.listen(port,host,()=>{
//     console.log(`Server started on ${host}${port}!!!`)
// })

// function notFound(res){
//     res.statusCode = 404
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Not Found\n')
// }
