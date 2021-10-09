const mong = require('mongoose')
const usersSchema = new  mong.Schema(
 {   
username:{type:String,reqired:true},
email :{type:String,reqired:true},
password:{type:String,reqired:true},
testsInfo :{type:Array,reqired:true}

}
);


module.exports = mong.model('user',usersSchema);
 

