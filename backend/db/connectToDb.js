const mongo = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.MONGO_URL);
function connect(){
    
    dotenv.config();

    mongo.connect(process.env.MONGO_URL,

    {useNewUrlParser : true},

     (error)=>{if(error) console.log("error was occured")

            else
 
             console.log("connection successed")
 
});


}

module.exports={
    Connect : connect
}