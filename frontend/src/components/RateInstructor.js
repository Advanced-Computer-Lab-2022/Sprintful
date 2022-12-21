//import "./styles.css";
import { useState } from "react";
import axios from 'axios';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RateInstructor = () => {
    const [rating, setRating] = useState(0);
    const [comment, setReview] = useState("")
    const [hoverStar, setHoverStar] = useState(undefined);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    // const test = async (e) =>{
    //   e.preventDefault();
    //   console.log("hello")
    // }

    const handleSubmit = async(e) => {
         e.preventDefault();
         console.log("hello");
          console.log({id});
    
    //     let axiosConfig = {
    //       headers: {
    //           'Content-Type': 'application/json;charset=UTF-8',
    //           "Access-Control-Allow-Origin": "*",
    //       }
    //     };

    //   axios.put(`http://localhost:5000/api/instructor/review?id=${id}`, { //?id=${id}
    //   rating: rating,
    //   comment: review
    // },axiosConfig)

    // .then(function (response) {
    //    console.log(response.data[0])
    //    console.log(response.data[1])
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  


         const NewRate = {rating, comment}
         
         const response = await fetch(`http://localhost:5000/api/instructor/review?id=${id}`, {
             method: 'PUT',
             body :JSON.stringify(NewRate),
             headers: {
                 'Content-Type': 'application/json'
             }
         })
         const json = await  response.json()
         console.log('New review was added', json)
             setRating('')
             setReview('')
 
        //  if(!response.ok){
        //      setError(json.error)
        //  }
        //  if(response.ok){
        //     //  setRating('')
        //     //  setReview('')
        //      //setError(null)
        //      console.log('New review was added', json)
        //  }

        }
    return (    //lines 88 and 114 should be a form
    <div>
    <form onSubmit={handleSubmit}> 
          <div >
                {Array(5).fill().map((_, index) =>
                  rating >= index + 1 || hoverStar >= index + 1 ? (
                    <AiFillStar
                      onMouseOver={() => !rating && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "orange" }}
                      onClick={() => setRating(index + 1)}
                    />
                  ) : (
                    <AiOutlineStar
                      onMouseOver={() => !rating && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "orange" }}
                      onClick={() => setRating(index + 1)}
                    />
                  )
                  
                )} 
            </div> 

            <div>
            <label>Review:</label>
                        <input 
                        type="text"
                        onChange={(e) => setReview(e.target.value)}
                        value={comment}/>

                 {/* <textarea id="area1" placeholder={handlePlaceHolder()}></textarea> 
                /*setReview(document.getElementById('area1').value); */}
            </div>

            <button> Submit </button>
    </form>
</div>


    );
  }

export default RateInstructor;