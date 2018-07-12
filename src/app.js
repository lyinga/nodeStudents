const express = require('express')
const path = require('path')
const app = express()
// node中处理静态资源
app.use(express.static(path.join(__dirname,"statics")))
// 导入路由的中间件
const accountRouter = require(path.join(__dirname,"./routers/accountRouter.js"))
app.use('/account',accountRouter)

// 试验一下
// app.get('/index',(req,res)=>{
//     res.send('hello world')
// })


app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err);
    }
    console.log("开启监听成功");
})