var express = require('express');
var router = express.Router();
const Users = require('../db/users');
const basics_Level_One = require('../db/basics_Level_One');
const basics_Level_Two = require('../db/basics_Level_Two');
const oop = require('../db/oop');






router.get('/', async function(req, res, next) {

    

   






   // const a =await oop.find({});
    

   // for(var i=0 ;i< a.length; i++)
   // {
   //     var prev = a[i].incorrect_answer;
       
   //     oop.updateOne({id : a[i].id} ,{ $set:{incorrect_answer:[...prev , a[i].correct_answer]}},(err,res)=>{
   //        err ? console.log("ggg") : console.log(res)
   //    });
   // }
 res.send('waiting ..')
});
module.exports = router;
