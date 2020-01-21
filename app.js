//app.js文件
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require('express')
const user = require('./router/user')

var db = mongoose.connect('mongodb://localhost:27017/envmon', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api',user)

//定义服务启动端口
app.listen(3000,() => {
    console.log('app listening on port 3000.')
})