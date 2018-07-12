// 导入express
const express = require('express')
const path = require('path')

// 创建路由对象
const accountRouter = express.Router()
// 导入路由控制器的内容
const accountCTRL = require(path.join(__dirname,"../controllers/accountController.js"))

accountRouter.get('/login',accountCTRL.getLoginPage)

accountRouter.get('/vcode',accountCTRL.getImageVcode)

// 还是试验一下吧
// accountRouter.get('/index',(req,res)=>{
//     res.send('hello world')
// })

// 导出路由模块
module.exports = accountRouter