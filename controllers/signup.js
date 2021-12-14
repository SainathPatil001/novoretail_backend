const User=require("../models/user")
const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.signup=(req,res)=>{
            

    // console.log(req.body);

    const {name,email,password}=req.body

    User.findOne({email}).then((user)=>{
        
        if(user)
        {
            res.status(404).json({error:"user Already Exits"})
        }
        else{
            bcrypt.hash(password, saltRounds, function(err, hash) {
                const nuser=new User({
          name,email,password:hash
                })
          
                nuser.save().then((user)=>{
                    res.json({"success":"new User Created",user:{name:user.name,email:user.email}})
                });
              });
        }
    })

    

}
