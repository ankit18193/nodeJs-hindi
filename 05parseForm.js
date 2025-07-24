const express=require('express')
const path =require('path')
const app=express();


// setting up parses for form 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


// EJS ka full form hai Embedded JavaScript.

// Ye ek templating engine hai jo tu Express.js ke sath use karta
//  hai taaki tu dynamic HTML pages bana sake JavaScript code ke 
// sath.

app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.render("index.ejs")
})



app.get("/",(req,res)=>{
    res.send("hello from routing");
    
})


app.get("/profile/:username",(req,res,next)=>{
    res.send(req.params.username)

})



app.get("/chotu",(req,res,next)=>{
   res.send("chotu....")
})





app.listen(30000,()=>{
    console.log("yeah! its working!");
    
})