const UserModel = require('../models/userModel.js');


//  const loadRegister = async(req,res) => {
//     try {
        
//                res.render('registration')         

//     } catch (error) {
//         console.log(error.message)
        
//     }

//  }

//  module.exports={
//     loadRegister
//  }

const loadRegister = async (req, res) => {
   try {
     res.render('users/registration'); // Match with the file name in ./views/users
   } catch (error) {
     console.log(error.message);
   }
 };
 
 module.exports = { loadRegister };
 