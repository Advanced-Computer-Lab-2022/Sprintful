//import "./styles.css";
import { useState } from "react";
import axios from 'axios';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RateInstructor = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("")
    const [hoverStar, setHoverStar] = useState(undefined);

    
  
    const handleText = () => {
      switch (rating || hoverStar) {
        case 0:
          return "Evaluate";
        case 1:
          return "Dissatifation";
        case 2:
          return "Unsatisfied";
        case 3:
          return "Normal";
        case 4:
          return "Satisfied";
        case 5:
          return "Very Satisfied";
        default:
          return "Evaluate";
      }
    };
    const handlePlaceHolder = () => {
      switch (rating || hoverStar) {
        case 0:
          return "Comment here...";
        case 1:
        case 2:
        case 3: 
          return "What is your problem?";
        case 4:
        case 5:
          return "Why do you like the instructor?";
        default:
          return "Comment here...";
      }
    };


    //Try using useEffect
    // useEffect(() => {
    //   const fetchData = async () => {
    //     await axios.post(`http://localhost:5000/api/instructor/review?id=${id}`)
        
    //     .then((res) => {
    //       setInstructor(res.data);
    //       console.log(res.data);
    //   })
    //   .catch((err) => {
    //       console.log(err);
    //   });
    // }       
    // fetchData();
    // }, []);

    const handleSubmit = async(e) => {
         e.preventdefault()

        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
          }
        };

        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        console.log(id);

      axios.post(`http://localhost:5000/api/instructor/review?id=${id}`, { //?id=${id}
      rating: rating,
      comment: review
    },axiosConfig)

    .then(function (response) {
       console.log(response.data[0])
       console.log(response.data[1])
    })
    .catch(function (error) {
      console.log(error);
    });


        //  const NewRate = {rating, review}
         
        // //  const response = await fetch(`http://localhost:5000/api/instructor/review?id=${id}`, {
        // //      method: 'POST',
        // //      body :JSON.stringify(NewRate),
        // //      headers: {
        // //          'Content-Type': 'application/json'
        // //      }
        // //  })
        //  const json = await  response.json()
        //  console.log('New review was added', json)
        //     //  setRating('')
        //     //  setReview('')
 
        // /* if(!response.ok){
        //      setError(json.error)
        //  }*/
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
            <label>Review:</label>
                        <input 
                        type="text"
                        onChange={(e) => setReview(e.target.value)}
                        value={review}/>

                {/* <textarea id="area1" placeholder={handlePlaceHolder()}></textarea> */}
                {/*setReview(document.getElementById('area1').value);*/}
                
            <button> Submit </button>
    </form>
</div>
    );
  }

export default RateInstructor;