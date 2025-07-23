const ser=require('http')
const server=ser.createServer((req,res)=>{
    res.end("hello node world")

})
server.listen(3000)