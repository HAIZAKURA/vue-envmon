//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const User = require("../models/user");

// 查询所有英雄信息路由
router.get("/user", (req, res) => {
  User.find({})
    .sort({ update_at: -1 })
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(2);
      res.json(err);
    });
});

// 通过ObjectId查询单个英雄信息路由
router.get("/user/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json(err);
    });
});

// 通过ObjectId查询单个英雄信息路由
router.get("/findUser/:userName", (req, res) => {
  User.findOne({ 'userName':req.params.userName })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      // res.json(err);
      res.json({
        status:"error",
        message:"error"
      })
    });
});

// 添加一个英雄信息路由
router.post("/addUser", (req, res) => {
  console.log(req)
  //使用Hero model上的create方法储存数据
  User.create(req.body, (err, user) => {
    if (err) {
      res.json({
        status:"fail",
        error:err
      });
    } else {
      res.json({
        status:"success",
        message:"新增成功"
      });
    }
  });
  console.log(req.body)
});

//更新一条英雄信息数据路由
router.put("/modUser/:id", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        userName: req.body.userName,
        userPass: req.body.userPass,
        userDept: req.body.userDept,
        userPowr: req.body.userPowr
      }
    },
    {
      new: true
    }
  )
  .then(user => res.json({
    status:"success",
    message:"修改成功"
  }))
  .catch(err => res.json({
    status:"fail",
    message:"修改失败"
  }));
});

//删除一条英雄信息路由
router.delete("/delUser/:id", (req, res) => {
  User.findOneAndRemove({
    _id: req.params.id
  })
    .then(user => res.json({
      status:"success",
      message:"删除成功"
    }))
    .catch(err => res.json({
      status:"fail",
      message:"删除失败"
    }));
});

module.exports = router;
