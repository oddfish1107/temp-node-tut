const os = require('os');
const user = os.userInfo()
// info about current user
console.log(user);

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.totalmem(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOS)