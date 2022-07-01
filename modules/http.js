const http = require("http");
const fs = require("fs");
const path = require("path");

// 1 way
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile(path.join(__dirname, "html", "index.html"), (err, data) => {
//       if (err) {
//         throw err;
//       }
//       res.writeHead(200, "ok", {
//         "Content-Type": "text/html",
//         // add headers
//       });
//       res.end(data); // can add whatever you want
//       console.log("on port");
//     });
//   }else if (req.url === "/contact") {
//     fs.readFile(path.join(__dirname, "html", "contact.html"), (err, data) => {
//       if (err) {
//         throw err;
//       }
//       res.writeHead(200, "ok", {
//         "Contact-Type": "text/html",
//       });
//       res.end(data);
//       console.log("on port");
//     });
//   }else{
//     fs.readFile(path.join(__dirname, "html", "error.html"), (err, data) => {
//       if (err) {
//         throw err;
//       }
//       res.writeHead(404, "not found", {
//         "Contact-Type": "text/html",
//       });
//       res.end(data);
//       console.log("something went wrong");
//     });
//   }
// });

// server.listen("3000", () => {
//   console.log("server has been started");
// });

// 2 way

// const server = http.createServer((req, res) => {
//   let filePath = path.join(
//     __dirname,
//     "html",
//     req.url === "/" ? "index.html" : req.url
//   );

//   let contentType = "text/html";

//   const ext = path.extname(filePath);
  
//   switch (ext){
//     case '.css':contentType = 'text/css' 
//     break
//     case '.js':contentType = 'text/javascript' 
//     break
//     default :contentType = 'text/html'
//   }

//   if(!ext){
//     filePath += '.html'
//   }
  
//   fs.readFile(filePath, (err, content) => {
//     if (err) {
//       fs.readFile(path.join(__dirname, "html", "error.html"), (err, data) => {
//         if (err) {
//           res.writeHead(500);
//           res.end("Error");
//         } else {
//           res.writeHead(200, {
//             "Content-Type": 'text/html',
//           });
//           res.end(data);
//         }
//       });
//     } else {
//       res.writeHead(200, {
//         "Content-Type": contentType,
//       });
//       res.end(content);
//     }
//   });
// });

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//   console.log(`Server has been started on ${PORT}...`);
// });
