
const RefundRequest=require('../models/refundRequestModel')
const IndividualTrainee=require('../models/individualTraineeModel')
const Course = require('../models/courseModel')
const asyncHandler = require('express-async-handler')







//Individual trainee adding a refund request to the admin's RefundsRequests Array
const addRefundRequest=asyncHandler(async(req,res)=>{
    const traineeid=req.params.traineeid;
    const courseid=req.params.courseid;

    //getting the trainee name :
    const traineeName=(await IndividualTrainee.findById(traineeid)).username


    //Getting Course Price after discount
    // Get Course 
    const course=await Course.findById(courseid).exec()
    let finalPrice=0;
           
               //handling setting course price according to discount and its expiry date 
                   //checking if expiry date has passed
                      //getting today's date (day 1)
                      let currentdate  =new Date();
                      let year=currentdate.getFullYear();
                      let month=currentdate.getMonth()+1; //because it outputs a number from 0-11 ex:3-->April
                      let day =currentdate.getDate();
                      let dateCformat=`${year}-${month}-${day}`  //current date in appropriate format.
                      let dateC=new Date(dateCformat);
                      //console.log(currentdate);
                      console.log(dateC)


                      //getting expiry date from DB "through server response"
                      const expirydate=course.discountExpireAt+"";
                      const dateformat=new Date(expirydate)

                      let year2=dateformat.getFullYear();
                      let month2=dateformat.getMonth()+1; //because it outputs a number from 0-11 ex:3-->April
                      let day2 =dateformat.getDate();
                      //const dateEformat=expirydate.substring(0,10);  //Put it in appropriate format
                      const dateEformat =`${year2}-${month2}-${day2}`
                      const dateE=new Date(dateEformat);
                      //console.log(expirydate);
                      console.log(dateE);

                      //Comparing current date with expiry date 
                      console.log(dateC.getTime()<=dateE.getTime());
                      if(dateC.getTime()<=dateE.getTime()){

                        const newPrice=course.discount*course.price;
                        finalPrice=newPrice;
                       }

                       else{
                        finalPrice=course.price;
                          }



    const request=new RefundRequest({
        traineeid:traineeid,
        traineeName:traineeName,
        course:courseid,
        amount:finalPrice
    })

    request.save(function (err) {
        if (err) {
            console.log(err);
        }
    })

      
    
    res.json(request)

}

)


const acceptRefund =asyncHandler(async(req,res)=>{

    
    const traineeid=req.query.traineeid;
    const courseid=req.query.courseid;

    //removing course from the trainee array of courses 

    const coursesArray=(await IndividualTrainee.findById(traineeid)).courses
    let indexfound;
    let coursedocument;
    for(let i=0;i<coursesArray.length;i++){
        coursedocument=coursesArray[i];
         //x=coursedocument.course.toString()==courseid;
        if(coursedocument.toString()==courseid){
           indexfound=i;
            break;
         }
     }
       coursesArray.splice(indexfound,1);

       const updatingcourseArray=await IndividualTrainee.findOneAndUpdate({_id:traineeid},{courses:coursesArray},{new:true})

        //removing the progress from the trainee progress array:

        const  ProgressArray=await IndividualTrainee.findOne({_id:traineeid},'-_id progress')
        const array=ProgressArray.progress
    
    
       // res.json(array);
        let courseprogress;
        let foundindex2;
        //let x;
    
         for(let i=0;i<array.length;i++){
            courseprogress=array[i];
             //x=coursedocument.course.toString()==courseid;
            if(courseprogress.course==courseid){
               foundindex2=i;
                break;
             }
         }

         array.splice(foundindex2,1)
    
         const updatingprogress=await IndividualTrainee.findOneAndUpdate({_id:traineeid},{progress:array},{new:true});
    
        // res.json(coursedocument)
         res.json({message:"done"});
    
        //res.json(updatingprogress)
    
    
    
    



   //res.json({message:updatingcourseArray});
}

)

module.exports = {addRefundRequest,acceptRefund}