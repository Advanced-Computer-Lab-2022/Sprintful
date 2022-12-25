const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
    
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_Secret, (err, decodedToken) => {
      if (err) {
        // console.log('You are not logged in.');
        // res send status 401 you are not logged in
        res.status(401).json({message:"You are not logged in."})
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(401).json({message:"You are not logged in."})
  }
};


module.exports = { requireAuth };


// const jwt = require('jsonwebtoken')
// const asyncHandler = require('express-async-handler')

// const Admin = require('../models/adminModel')

// const protect = asyncHandler(async(req,res,next)=>{
//     let token 

//     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
//         try{
//             //GET token from header
//             token = req.headers.authorization.split(' ')[1]
//             //verify token
//             const decoded =jwt.verify(token, process.env.JWT_SECRET)

//              //Get user from the token
//              req.admin = await Admin.findById(decoded.id).select('-password')
//              next()
//         }
       
//         catch(error){
//             console.log(error)
//             res.status(401) // not authorized
//             throw new Error('not authorized')
//         }
//     }
//         if(!token){
//             res.status(401)
//             throw new Error ('not authorized , no token')
//         }
    
// })

// module.exports = {protect}