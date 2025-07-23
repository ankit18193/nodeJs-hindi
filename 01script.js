// const { log } = require('console');
const fs = require('fs');
fs.writeFile('hello.txt',"hello world from node js",function(err){
    if(err){
        console.error(err);
        
    }else{
        console.log("file created");
        
        //Appending file 
        fs.appendFile("hello.txt","\nappending text to file",function(err){
            if(err){
                console.error(err);
                
            }else{
                console.log("append successfull");
                
                fs.readFile("hello.txt","utf-8",function(err,data){
                 if(err){
                    console.error(err)
                 }else{
                    console.log(data)
                    console.log("data showed");
                    
                 }
                })

            }
        })
    }
})


fs.watchFile("hello.txt",(curr,prev)=>{
    console.log(`currrent time:${curr.mtime}`);
    console.log(`previous time:${prev.mtime}`);
    
})

