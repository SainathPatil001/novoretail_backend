const express =require("express")
const app=express();
const path=require("path")
const mongoose=require("mongoose")
const cors=require("cors");
const loginRoutes=require(path.join(__dirname,"routes","login"))
const signupRoutes=require(path.join(__dirname,"routes","signup"))


// db connection
mongoose.connect('mongodb+srv://saipatil1:saipatil@cluster0.86lnj.mongodb.net/novoretail?retryWrites=true&w=majority',()=>{
    console.log("DB Connected");
});

// middlewares
app.use(cors())
app.use(express.json());
app.use(loginRoutes)
app.use(signupRoutes)
app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(8000,()=>{
    console.log("server listening");
})