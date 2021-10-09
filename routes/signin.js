var express = require('express');
var router = express.Router();
var mongo = require('mongoose');
const Users = require('../Collections/users');



Users.find({},(error,result)=>{

    error ? console.log(error) :
    console.log(result);


})



router.get('/signin', function(req, res, next) {
    console.log("hello")
  });
  