const mong = require('mongoose')
const testSchema = new  mong.Schema(
 {  id:{type:Number},
    qusetion :{type:String},
    incorrect_answer :{type:Array},
    correct_answer:{type:String}


}
);



module.exports = mong.model('oop',testSchema);