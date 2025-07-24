const express=require('express')
const app=express()

app.use(express.jason());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log("middleware in use");
    next();
    
});
app.get('/',(req,res)=>{
    
    res.send("hello world from node ")

});

app.get("/new",(req,res,next)=>{
    return next(new error("somthing went wrong!"))
}); 

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('somthing broken!')
})


app.listen(3000)