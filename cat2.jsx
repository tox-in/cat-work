const express = require('express')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.urlencoded({extended:true}))

app.get('',(req,res)=>{
    app.readFile(__dirname+"/cat2.ejs")
});
app.post("/",(req,res) =>{
    const n1= req.body.num1
     
    const n2=req.body.num2 
   
    const multiply=n1*n2
  res.send('the answer is'+multiply)
})

app.listen(8024,'localhost')