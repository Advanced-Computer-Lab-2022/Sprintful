const asyncHandler = require('express-async-handler')
const { appendFile } = require('fs')
const { builtinModules } = require('module')
const courseModel = require('../models/courseModel.js')
const instructor = require('../models/instructorModel.js')


// Search for a course based on course title or subject or instructor
const searchCourse= asyncHandler(async (req,res) => {
    const title = req.query.title;
    const subject = req.query.subject;
    const instructorName = req.query.instructor;
    const instructorId = await instructor.find({name:instructorName}).select('_id');

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
}) 




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
    
        const result = await courseModel.find({price: {$lte: price}});
        if(result.length>0){
            res.status(200).json(result);
        }
        else{
            res.status(400).json({error:"No course found"});
        }
})


module.exports = {searchCourse, filterSubjectRating, filterPrice}