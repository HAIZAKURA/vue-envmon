//hero.js文件

//引入mongoose模块
const mongoose = require('mongoose')

//定义数据模型，可以看到，我们下面创建了一个表，表中的数据有name、age、sex等字段，并且这些字段的数据类型也定义了，最后将model导出即可
const userSchema = mongoose.Schema({
  userName: String,
  userPass: String,
  userDept: String,
  userPowr: String,
}, { collection: 'users', versionKey: false})
//这里mongoose.Schema最好要写上第二个参数，明确指定到数据库中的哪个表取数据，我这里写了myhreo，目的就是为了以后操作数据要去myhreo表中。
//这里不写第二个参数的话，后面你会遇到坑。

//mongoose连接数据库
// DB_URL = 'mongodb://localhost:27017/envmon'; /** * 连接 */ 
// mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }); /** * 连接成功 */ 
// mongoose.connection.on('connected', function () { 
// console.log('Mongoose connection open to ' + DB_URL); }); /** * 连接异常 */ 
// mongoose.connection.on('error',function (err) { 
// console.log('Mongoose connection error: ' + err); }); /** * 连接断开 */ 
// mongoose.connection.on('disconnected', function () { 
// console.log('Mongoose connection disconnected'); });

//导出model模块
const User = module.exports = mongoose.model('user', userSchema);