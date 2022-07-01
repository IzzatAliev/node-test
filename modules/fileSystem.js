// const fs = require("fs");
// const path = require("path");

// create directory

// fs.mkdir(path.join(__dirname, 'module'), (err) => {
//     if(err){
//         throw err
//     }

//     console.log('Directory created')
// })

// create file and rewrite

// const filePath = path.join(__dirname, 'docum.txt')

// fs.writeFile(filePath, 'Peace or War,\ndoesn`t matter cause\nalways there are problems', err => {
//     if(err){
//         throw err
//     }

//     console.log('text written')
// })

// create file and append text

// const filePath = path.join(__dirname, 'docum.txt')

// fs.appendFile(filePath, 'Peace or War,\ndoesn`t matter cause\nalways there are problems', err => {
//     if(err){
//         throw err
//     }

//     console.log('text written')
// })

// read file

// const filePath = path.join(__dirname, "docum.txt");

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
  //   const buffer = Buffer.from(data);
  //   console.log(buffer.toString());
  //or add 'utf-8' and that below
//   console.log(data);
// });
