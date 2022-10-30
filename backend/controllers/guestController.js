const asyncHandler = require('express-async-handler')
const { appendFile } = require('fs')
const { builtinModules } = require('module')
const courseModel = require('../models/courseModel.js')
const instructor = require('../models/instructorModel.js')
//var result


//search for a course based on course title or subject or instructor

const searchCourse= asyncHandler(async (req,res) => {
    const title = req.query.title;
    const subject = req.query.subject;
    const instructorName = req.query.instructor;
    const instructorId = await instructor.find({name:instructorName}).select('_id');
    //const result = await courseModel.find({title: title, subject: subject, instructor: instructorId});
    //const result =  await courseModel.find({"$or":[{title:title},{subject:subject},{instructor:instructorId}]});
    //const result =  await courseModel.find({"$or":[{title:{$regex: title}},{subject:subject},{instructor:instructorId}]});
    // const result = await courseModel.find({title: title});
    // const result2 = await courseModel.find({subject: subject});
    // const result3 = await courseModel.find({instructor: instructorId});
    // const final = result.concat(result2).concat(result3);

   let result
    if(subject == null && instructorName == null){
        result = await courseModel.find({title: title});
        res.json(result);
    } else if(title == null && instructorName == null){
        result = await courseModel.find({subject: subject});
        res.json(result);
    } else if(title == null && subject == null){
        result = await courseModel.find({instructor: instructorId});
        res.json(result);
    } else {
        res.status(400).json({error:"No course found"});
    }

        
  
    //  if(final.length>0){ 
    //  res.status(200).json(final);
    //  }
    //  else if (final.length == 0){
    //      res.status(400).json({error:"No course found"});
    //  }
}) 



//filter the courses based on a subject and/or rating

const filterSubjectRating= asyncHandler(async (req,res) => {
    const subject = req.query.subject;
    const rating = req.query.rating;
    //const course = await courseModel.find({$or:[{subject:subject},{rating:rating}]});

    const result= await courseModel.find({subject:subject});
    const result2= await courseModel.find({rating:rating});
    const final = result.concat(result2);

    if(final.length>0){
        res.status(200).json(final);
    }
    
    else{
        res.status(400).json({error:"No course found"});
    }
})



//filter the courses based on price (price can be FREE)
const filterPrice= asyncHandler(async (req,res) => {
    const price = req.query.price;
    // if(price == "FREE"){
    //     const result = await courseModel.find({price:0}); 
    //     if(result.length>0){
    //         res.status(200).json(result);
    //     }
    //     else{
    //         res.status(400).json({error:"No course found"});
    //     } 
    // }
    // else{
        const result = await courseModel.find({price: {$lte: price}});
        if(result.length>0){
            res.status(200).json(result);
        }
        else{
            res.status(400).json({error:"No course found"});
        }
    

    

})

module.exports = {searchCourse, filterSubjectRating, filterPrice}

/*
const searchCourse = asyncHandler(async (req,res) => {
    const title= req.body.title;
    const subject = req.body.subject;
    const instructorName = req.body.instructor;
    const instructorId = await instructor.find({name:instructorName}).select('_id');
    
    let data = await courseModel.find(
        {
            "$or":[
                {title: title},
                {subject:subject},
                {instructor:instructorId}
            ]
        }
    )
    console.log(title)
    res.send(data);
})
*/

/* 
var express = require('express');  
var app = express();  
app.get('/myform', function(req, res){  
    var myText = req.query.mytext; //mytext is the name of your input box 
    res.send('Your Text:' +myText);  
});  
app.listen(3000) 


const filterBlog = async(req,res) => {
    
    
    1- get the author id from the request query
    2- find all the blogs that have the same author id
    3- send the blogs as a response
    
   
    const userId = req.query.userId;
    // check if userId is not empty
    if(userId){
    const result = await blogModel.find({author:mongoose.Types.ObjectId(userId)}).populate('author');
    res.status(200).json(result)
    }else{
        res.status(400).json({error:"userId is required"})
    }
}

*/