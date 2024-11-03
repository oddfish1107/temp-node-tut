//MODULES
// COMMONJS, EVERY FILE IS MODULE (BY DEFAULT)
/*
const john = 'john'
const peter = 'peter'
const secret = 'SUPER SECRET'

/*const sayHi = (name)=>{
    console.log(`Hello ${name}`);
}*/

// const names = require('./4-names');
// const sayHi = require('./5-utlis');
// const data = require('./alternative-flavour');
// require('./7-mind-grenade');
// sayHi(names.john)
// sayHi(names.peter)
// sayHi('susan')
//51:57

// const path = require('path');

// console.log(path.sep)

// const filePath= path.join('/content','subfolder','test.txt')
// console.log(filePath)

// const base = path.basename(filePath) // show what file you are in
// console.log(base)

// const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute)

//1:10:26

// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','utf8')

// //console.log(first,second)

// writeFileSync(
//     './content/result-sync.txt',
//     `Here is the reusult: ${first}, ${second}`,
//     { flag: 'a'}
// )

// const {readFile, writeFile} = require('fs')


// readFile('./content/first.txt','utf8',(err,result)=>{
// if(err){
//     console.log(err)
//     return
// }
//     const first = result;
//     readFile('./content/second.txt','utf8',(err,result)=>{
//         if(err){
//         console.log(err)
//         return
//         }
//         const second = result;
//         writeFile(
//             './content/result-async.txt',
//             `Here is the reusult: ${first}, ${second}`,
//             (err,result)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 console.log(result)
//             }
//         )
//     })
// })

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if (req.url === '/'){
//         res.end('Welcome to our homepage')
//     }
//     if (req.url === '/about'){
//         res.end('Here is our short history')
//     }
//     res.end(`
//     <h1>Oops!</h1>
// <p>We can't find the page you are looking for</p>
// <a href="/">back home</a>
//     `)
// })

// server.listen(5000)

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install - g <packageName>

// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

//1:56:15

const _= require('lodash');

const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
