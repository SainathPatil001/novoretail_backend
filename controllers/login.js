const User=require("../models/user")
const bcrypt = require('bcrypt');

exports.login=(req,res,next)=>{ 
  
    const {email,password}=req.body;
console.log(req.body);
    User.findOne({email}).then((user)=>{
   
        if(user)
        { 

            bcrypt.compare(password, user.password, function(err, result) {
                if(result===true)
                {
                    res.json({"success":"Successfully LogIn",user:{
                        name:user.name,
                        email:user.email
                    }})
                }
                else{
                    res.status(400).json({"error":"Invalid Credentials"})
                }
            });

        }
        else{
            res.status(400).json({error:"Invalid Csredentials"})
        }
    })
}
