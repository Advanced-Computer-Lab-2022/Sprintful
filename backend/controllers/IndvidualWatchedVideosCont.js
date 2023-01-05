const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const { builtinModules } = require('module')
const IndividualWatchedVideos= require('../models/IndividualWatchedVideosModel')
// const CorporateTrainee = require('../models/corporateTraineeModel')
// const Corporates = require('../models/corporatesModel')


const insertATrainee=asyncHandler(async (req, res) => {
    //const discount =(req.body.discount)/100
    const newDocument = new IndividualWatchedVideos({
        corporateid: req.params.traineeid,
        watchedvideos: [],
    });

    
        newDocument.save(function (err) {
            if (err) {
                console.log(err);
            }
        })

        res.json(newDocument)
    })

    const addwatchedvideo=asyncHandler(async (req, res) => {

        const corporateid=req.params.traineeid;
        const watchedvideoid=req.body.watchedvideo;
        const watchdedvideoString=watchedvideoid.toString();
          //getting old watched videos
          const traineewatchedvideos=(await IndividualWatchedVideos.findOne({corporateid:corporateid})).videosWatched
          const partialwatchedvideos=[watchdedvideoString]
          const newArray= traineewatchedvideos.concat(partialwatchedvideos)


         const updatingvideos=await IndividualWatchedVideos.findOneAndUpdate({corporateid:corporateid},{videosWatched:newArray},{new:true});
          res.json(updatingvideos)
        
        })

        const checkifVideoWatched=asyncHandler(async (req, res) => {

            const corporateid=req.params.traineeid;
            const videoid=req.body.videoid
            const videoidstring=videoid.toString();
              //getting old watched videos
              const traineewatchedvideos=(await IndividualWatchedVideos.findOne({corporateid:corporateid})).videosWatched
              
            


            let found=false;
            let video;
        
            for(let i=0;i<traineewatchedvideos.length;i++){
                video=traineewatchedvideos[i];
                 //x=coursedocument.course.toString()==courseid;
                if(video==videoidstring){
                   found=true; //he/she is registered to that course 
                    break;
                 }
             }
             
             res.json({found:found})

            })


    module.exports = {insertATrainee,addwatchedvideo,checkifVideoWatched}