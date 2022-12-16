import axios from "axios";
import { useState } from "react"
import {useParams} from "react-router-dom";






const AddPromotionCourse=()=>{
        //States 
    const [discount,setDiscount]=useState(0); // try it with an empty String
    const[discountExpireAt,setDiscountExpireAt]=useState('')

     //getting courseid from react route 
     const courseid=useParams().courseid;

    //handling Submitting 
    
     const handleSubmit=async(e)=>{
        e.preventDefault();
    

        //The Update 
        const update={discount:discount,discountExpireAt:discountExpireAt}

        const response=await axios.patch(`http://localhost:5000/api/courses/addPromotion/${courseid}`,update)

        
        //Reset the states 
        setDiscount(0);
        setDiscountExpireAt('');


        //Redirecting 
        //Navigating to Instructor course view Page 

     }
    




    return (

        <div className="create">
            <form onSubmit={handleSubmit}>
              <h3> Add a promotion</h3>
                 <label>Discount: </label>
                    <input type="number" 
                        value={discount}   //inital value in current render
                        onChange={(e)=>{setDiscount(e.target.value)}}/>

                    <p>Put it in decimal format.</p>
                    <p> Example :0.5 means 50%</p>




                 <label>Expires at :</label>
                    <input type="text"
                        value={discountExpireAt}
                        onChange={(e)=>{setDiscountExpireAt(e.target.value)}}/>
                     <p>Format : YYYY-MM-DD</p>


                   <button>Add promotion</button>
            </form>



        </div>




    )
}

export default AddPromotionCourse