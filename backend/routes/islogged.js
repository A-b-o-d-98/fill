var express = require('express');
var router = express.Router();
const Users = require('../db/users');




router.post('/', async(req,res,next)=>{

  if(req.body.desc == 'times of test')
  { const Username = req.body.username; 
    const check = await Users.findOne({username:Username })
    check.testTimes < 2 ?  
     Users.updateOne({username:Username},{$set:{testTimes:check.testTimes+1}},(err,res)=>{err ? console.log(err) :  console.log(res)})
     :
      console.log(res)
  
  }
    
    var Username = req.body.username;
    var password = req.body.password;
    
    
  
     const check = await Users.findOne({username:Username ,password:password }, (error,result)=>

    
     {result == null  ? 
      res.send({mess:false}) : res.send({mess:true})})
      
    //  {error ? console.log("error ") : console.log(result)})  
      
  
    }
  
  );
  router.post('/test', async(req,res,next)=>{
    const id = req.body.ID;
    const check = await Users.findOne({_id:id}, (error,result)=>
    {error ? res.send({mess:false}): res.send({mess:true})});
   
  
  
  
  }  
  );
  

module.exports = router;