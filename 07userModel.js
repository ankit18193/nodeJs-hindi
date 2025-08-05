const express=require('express')
const app=express();

const usermongo=require('./mongoo')

app.get("/",(req,res)=>{
    res.send("hello mongo ")

})
app.get("/create",async (req,res)=>{
  let userCreated= await usermongo.create({
    name:"chotuji",
    email:"chotu11@gmail.com",
    username:"chotu33"

  })
  res.send(userCreated)

})

app.get("/update",async (req,res)=>{
  let updateduser=await usermongo.findOneAndUpdate({username:"ankit12"},{name:"motu"},{new:true}
  )

  res.send(updateduser)
})

app.get("/read",async (req,res)=>{
  let alluser=await usermongo.find()
  res.send(alluser)
})

app.get("/delete",async (req,res)=>{
  let userDeleted=await usermongo.findOneAndDelete({name:"chotu"})
  res.send(userDeleted)
})



app.listen(5000);