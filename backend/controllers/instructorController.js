const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { builtinModules } = require('module')
const Course = require('../models/courseModel')
const Instructor = require('../models/instructorModel')
const Subtitle = require('../models/subtitleModel')
const Task = require('../models/taskModel')
const { appendFile } = require('fs')
const courseModel = require('../models/courseModel.js')
const instructor = require('../models/instructorModel.js')


const createInstructor = asyncHandler(async (req, res) => { 
    const { username, password } = req.body

    const instructorExists = await Instructor.findOne({ username })

    if (instructorExists) {
        res.status(400)
        throw new Error('Instructor already exists')
    }
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const instructor = await Instructor.create({
        username,
        password: hashedPassword
    })

    if (instructor) {
        res.status(201).json({
            _id: instructor._id,
            username: instructor.username,
            password: instructor.password,
            token: generateToken(instructor._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid instructor data')
    }
})

//NO authentication
//Changes Milad's password
const changePassword = async(req, res, next) => {
    console.log("Change Password");
    try{
        const{userId} = req.params;
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        const userPassword = await Instructor.findByIdAndUpdate('636179a6cae9a97f1a43d792', req.body, {new: true})   //combinations? hardcode it
        return res.status(200).json({ status: true, data: password});
    }
    catch(error){
        return res.status(400).json({ status: false, error: "Error Occured"});
    }
}
//Rate and add a review to the instructor
const addInstructorReview = asyncHandler( async (req, res, next) => {
    const { rating, comment} = req.body;
    const  instructorId =req.query.id;
    console.log("I am woring");
    const review = {
        rating: Number (rating),
        comment
    }
    const instructor = await Instructor.findById(instructorId);
    /*const isReviewed = course.reviews.find(    //No authentication baby
        r => r.user.toString() === req.user._id.toString()
    )

    if(isReviewed){ 
        course.reviews.array.forEach(review => {
            if(review.user.toString() === req.user._id.toString()) {
                review.review = comment;
                review.rating = rating;
            }    
        });
    }*/
        //in else part
        instructor.reviews.push(comment);
        //review.rating = Number (rating);
        instructor.ratingsArray.push(rating);

        //course.rating = (ratingsArray / ratingsArray.length) * ratingsArray.length;

            var total = 0;
            for(var i = 0; i < instructor.ratingsArray.length; i++) {
                total += instructor.ratingsArray[i];
            }
            var avg = total / instructor.ratingsArray.length; 
            instructor.rating = avg;    
        console.log(avg);
        console.log(instructor.rating);
    //course.rating = course.reviews.reduce((acc, item) => item.rating + acc, 0) / course.reviews.length
   /* const updatedCurrentRating = await Course.findOneAndUpdate(
        { _id: req.params.courseId },
        [{$set: { rating: { $avg: 'rating.star' } }}],
        {
           new: true,
           useFindAndModify: true
        });
    console.log(updatedCurrentRating);
*/
    await instructor.save({ validateBeforeSave: false});

    res.status(200).json({
        success: true
    })
})

const getInstructorRating = asyncHandler(async (req, res) => {
    const instructor = await Instructor.findById(req.query.id)
    let allReviews
    let rating
        allReviews = await instructor.reviews;
        rating = await instructor.rating;
        if (allReviews.length > 0 && rating > 0) {
            res.status(200).json({rating, allReviews});
        }
        else {
            res.status(400).json({ error: "No reviews found" });
        }
        console.log(rating);
        console.log(allReviews);
})

const getInstructorProfile = asyncHandler(async (req, res) => {
    const instructor = await Instructor.findById(req.query.id)
    console.log(instructor);
    if (instructor) {
        res.json(instructor)
    } else {
        res.status(404)
        throw new Error('Instructor not found')
    }
})

module.exports = {createInstructor, changePassword, addInstructorReview, getInstructorRating, getInstructorProfile}
