
const path = require('path');

console.log(path.sep)

const filePath= path.join('/content','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath) // show what file you are in
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)
