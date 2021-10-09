var express = require('express');
var router = express.Router();
const Users = require('../db/users');


router.post('/',async (req,res,next)=>{

    const {username,password} = req.body;
    var condOfuser = false;
    var condOfpassword = false;
    
    // const check = await Users.findOne({username,password})
    // check==null ? res.send({mess:false}) : res.send({mess:true,username:check.username,password:check.password})

    await Users.exists({username:username}).then((res)=>{res ? condOfuser = true :  condOfuser = false})
    if(condOfuser){
          const check = await Users.findOne({username,password})
          check==null ? condOfpassword = false : 
                        condOfpassword = true ;

    }
     res.send({condOfpassword : condOfpassword ,condOfuser : condOfuser, username:username,password:password})
    
     console.log(username ,condOfpassword, password)
});


module.exports = router;