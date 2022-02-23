'use strict';
const validator = (req,res,next)=>{
  const  inputName = req.query.name
  console.log(inputName);
    if ( isNaN(inputName)){
         next();
    } else  {
        next("the input is empty or not a string");
    }
   
}
module.exports = validator;