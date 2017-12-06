const os = require("os");
console.log(os.arch()); // cpu架构
console.log(os.constants) //操作系统常量
console.log(os.cpus()) // cups信息
console.log(os.endianness()) //系统端模式
console.log(os.freemem()) //系统剩余内存
console.log(os.homedir())  //用户目录
console.log(os.hostname())  //用户名
console.log(os.loadavg())
console.log(os.networkInterfaces()) // 网络信息
console.log(os.platform()) // 系统平台
console.log(os.release()) // 系统发布版本
console.log(os.tmpdir()) // 系统临时目录
console.log(os.totalmem()) //总内存
console.log(os.type())  //系统类型
console.log(os.uptime()) // 系统运行时间
console.log(os.userInfo())  //用户信息