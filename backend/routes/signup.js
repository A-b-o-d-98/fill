var express = require('express');
const { UnavailableForLegalReasons } = require('http-errors');
var router = express.Router();
const Users = require('../db/users');

/* GET home page. */

router.post('/',async function(req, res, next) {
     Username = req.body.username;
     var condOfuser = true;
     var condOfemail = true;
    const newUser = await new Users({
        username:Username,
        email:req.body.email,
        password:req.body.password,
        testsInfo:[]
    })
       await Users.exists({username:Username}).then((res)=>{res ? condOfuser = false :  condOfuser = true})
       await Users.exists({email:req.body.email}).then((res)=>{res ? condOfemail = false :  condOfemail = true})
     
       condOfemail && condOfuser?  newUser.save((error,result)=>{error ? console.log(error):res.send({mess:true})}) :
       res.send({condOfuser : condOfuser , condOfemail : condOfemail })

       console.log("username is : " , condOfuser , "email is :" ,condOfemail )
                
});



module.exports = router;
