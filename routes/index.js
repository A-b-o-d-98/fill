var express = require('express');
var router = express.Router();
var mongo = require('mongoose');
 



// mongo.connect('mongodb://localhost:27017/emps',{
//     useNewUrlParser : true
// },
// (error)=>{if(error) console.log("error was occured")
//  else
 
//  console.log("connection successed")
// });
// get the updated id
var  idCounter;


/* GET home page. */
router.get('/', function(req, res, next) {
 console.log("hellp")
});




// router.post('/insert', control.InsertUser);

// router.get('/getUsers' ,control.GetUser);

// router.post('/Update' , control.UpdateUser);

// router.post('/Delete' ,control.DeleteUser);
 




 
module.exports = router;
  
