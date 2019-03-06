const express= require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

const PORT=3000
const app=express()
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT,function(){
  console.log("app serveris up and running !");

})

app.get('/',function(req,res){
    res.send("Hello from server");

})

app.post("/enroll",function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"Data Received here"})

})