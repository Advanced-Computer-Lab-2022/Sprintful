const asyncHandler = require('express-async-handler')
const { appendFile } = require('fs')
// const { builtinModules } = require('module')
const IndividualTrainee = require('../models/individualTraineeModel')
const CorporateTrainee = require('../models/corporateTraineeModel')
const Admin = require('../models/adminModel')
const Instructor = require('../models/InstructorModel')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { Server } = require('http')
require('dotenv').config()
var nodemailer = require('nodemailer');


//Generate JWT
const generateToken =(id) =>{
    return jwt.sign({id }, process.env.JWT_SECRET, {
        expiresIn: '365d',
    })
}
const signUp = asyncHandler(async (req, res) => { 
    const { username,email, password,firstName, lastName,gender} = req.body
    try {
       const individualTraineeExists = await IndividualTrainee.findOne({ username })
       if (individualTraineeExists) {
           res.status(400)
           throw new Error('Individual Trainee already exists')
       }
       else {
           const salt = await bcrypt.genSalt(10)
           const hashedPassword = await bcrypt.hash(password,salt)
           const individualTrainee = await IndividualTrainee.create({
               username,
               email,
               password: hashedPassword,
               firstName,
               lastName,
               gender
           })
           if (individualTrainee) {
               res.status(201).json({
                   _id: individualTrainee._id,
                   username: individualTrainee.username,
                   email: individualTrainee.email,
                   password: individualTrainee.password,
                   firstName: individualTrainee.firstName,
                   lastName: individualTrainee.lastName,
                   gender: individualTrainee.gender,
                   // token: generateToken(corporateTrainee._id)
               })
           } 
           else {
               res.status(400)
               throw new Error('Invalid Individual Trainee data')
           }
       }
   }
    catch (error) {
       res.status(400).json({ error: error.message })
   }   
}
)

const login =asyncHandler (async(req,res)=>{
    const {username,password} = req.body
    const admin = await Admin.findOne({username})
    const corporateTrainee = await CorporateTrainee.findOne({username})
    const individualTrainee = await IndividualTrainee.findOne({username})
    const instructor = await Instructor.findOne({username})

    // .compare compares the entered plain text password with the user's password in the db
    if(admin && (await bcrypt.compare(password , admin.password)))
    {
        res.json({
            _id: admin.id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id),
            role: "Admin"
            
        })
    }
    else if(corporateTrainee && (await bcrypt.compare(password , corporateTrainee.password)))
    {
        res.json({
            _id: corporateTrainee.id,
            name: corporateTrainee.name,
            email: corporateTrainee.email,
            token: generateToken(corporateTrainee._id),
            role: "Corporate"

        })
    }
    else if(individualTrainee && (await bcrypt.compare(password , individualTrainee.password)))
    {
        res.json({
            _id: individualTrainee.id,
            name: individualTrainee.name,
            email: individualTrainee.email,
            token: generateToken(individualTrainee._id),
            role: "Individual"

        })
    }
    else if(instructor && (await bcrypt.compare(password , instructor.password)))
    {
        res.json({
            _id: instructor.id,
            name: instructor.name,
            email: instructor.email,
            token: generateToken(instructor._id),
            policy: instructor.policy,
            role: "Instructor"
        })
    }
    else{
        res.status(400)
        throw new Error ('Invalid credentials')
    }
 
}
)

const forgotPassword = asyncHandler(async (req, res) => {
    const {email} = req.body
    try{
      const oldUser =  await Admin.findOne({email : email}) || await CorporateTrainee.findOne({email}) || await IndividualTrainee.findOne({email}) || await Instructor.findOne({email})
      if(!oldUser) {
         // return res.send.json({status:"User doesn't exist"});
         res.status(400).json({status:"User doesn't exist"});
  
      }
      //console.log(oldUser.email + " " + oldUser.password)
      //const secret = JWT_SECRET + oldUser.password;
      //console.log("secret: " +secret);
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id },  process.env.JWT_SECRET + oldUser.password, {
          expiresIn: "1d",
      });
      //res.status(200).json({token:token});
         const link = `http://localhost:5000/api/guest/resetPassword/${oldUser._id}/${token}`;  
         //console.log(link)
         var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'sprintful.team@gmail.com',
            pass: 'fsssjvddgyeestsg'
            
          }
        });

        console.log("transporter is ready")
  
        var mailOptions = {
          from: 'sprintful.team@gmail.com',
          to: 'somayaelziady.14@gmail.com',
          subject: 'Password Reset Link',
          text: link
        };

        console.log("mail is prepared")
  
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      console.log(link)
      //   res.status(200).json({status:"success"});
  }
  catch (error) {}
  })
  
  
  const resetPassword = asyncHandler(async (req, res) => {
      const { id, token } = req.params;
      console.log(req.params);
      const oldUser= await Admin.findById(id) || await CorporateTrainee.findById(id) || await IndividualTrainee.findById(id) || await Instructor.findById(id)
      if(!oldUser) {
          res.status(400).json({status:"User doesn't exist"});
      }
      try{
          const verify = jwt.verify(token, process.env.JWT_SECRET + oldUser.password);
          //res.send("verified");
          console.log("hello get reset password")
          res.render("index", {email: verify.email, status:"unverified"})
      }
      catch(error){
          console.log(error);
          res.send("Not verified")
      }
  })
  
  
  const resetPassword2 = asyncHandler(async (req, res) => {
      const { id, token } = req.params;
      const {password} = req.body;
      console.log(req.params);
      const admin = await Admin.findById(id)
      const corporateTrainee = await CorporateTrainee.findById(id)
      const individualTrainee = await IndividualTrainee.findById(id)
      const instructor = await Instructor.findById(id)
      let verify;
      let encryptedPassword;
  
      //const oldUser= await Admin.findById(id) || await CorporateTrainee.findById(id) || await IndividualTrainee.findById(id) || await Instructor.findById(id)
      if(!admin && !corporateTrainee && !individualTrainee && !instructor) {
          res.status(400).json({status:"User doesn't exist"});
      }
      try{
        console.log("hello post reset password");
          if(admin){
            console.log("admin checked");
              verify = jwt.verify(token, process.env.JWT_SECRET + admin.password);
              encryptedPassword = await bcrypt.hash(password, 10);
              await Admin.updateOne(
                  {
                      _id: id,
                  },
                  {
                      $set: {
                          password: encryptedPassword,
                      },
                  }
              );
          }
          else if(corporateTrainee){
            console.log("corporateTrainee checked");
              verify = jwt.verify(token, process.env.JWT_SECRET + corporateTrainee.password);
              encryptedPassword = await bcrypt.hash(password, 10);
  
              await CorporateTrainee.updateOne(
                  {
                      _id: id,
                  },
                  {
                      $set: {
                          password: encryptedPassword,
                      },
                  }
              );
          }
          else if(individualTrainee){
            console.log("individualTrainee checked");
              verify = jwt.verify(token, process.env.JWT_SECRET + individualTrainee.password);
              encryptedPassword = await bcrypt.hash(password, 10);
  
              await IndividualTrainee.updateOne(
                  {
                      _id: id,
                  },
                  {
                      $set: {
                          password: encryptedPassword,
                      },
                  }
              );
          }
          else{
            console.log("instructor checked");
              verify = jwt.verify(token, process.env.JWT_SECRET + instructor.password);
              encryptedPassword = await bcrypt.hash(password, 10);
  
              await Instructor.updateOne(
                  {
                      _id: id,
                  },
                  {
                      $set: {
                          password: encryptedPassword,
                      },
                  }
              );
          }
            console.log("out of checks")
          res.render("index", { email: verify.email, status: "verified"});
         // res.json({status: "password updated"});
          //res.render("index", {email: verify.email, status: "verified"})
      }
      catch(error){
          console.log(error);
          res.json({status: "something went wrong"});
      }
  })

module.exports = { signUp, login, forgotPassword, resetPassword, resetPassword2}