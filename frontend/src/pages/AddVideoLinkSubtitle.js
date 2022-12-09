import { useState } from "react";
import {useParams } from "react-router-dom";
import {useNavigate} from "react-router";
import axios from 'axios';



const AddVideoLinkSubtitle=()=>{
          //states
         //youtubevideo -> video Link
        const[youtubeVideo,setYoutubeVideo]=useState("");
        const[videoDescription,setVideoDescription]=useState("");
        //const{subtitleid}=useParams(); //{subtitleid}-->destructuring
        const subtitleid=useParams().subtitleid;
        //useNavigate
        const navigate=useNavigate();


          //functions
        const handleSubmit=async(e)=>{
            const update ={youtubevideo:youtubeVideo ,videoDescription:videoDescription}
         
            const response=await axios.patch(`/api/subtitles/addVideoLink/${subtitleid}`,update);
            console.log("subtitle Updated",response.data)
               setYoutubeVideo("");
               setVideoDescription("");

               navigate(`/api/subtitles/${subtitleid}/Instructor`);
               navigate(0);


        }  
   
   
   
   
   
   
    return(
        <div className="create">
            <form onSubmit={handleSubmit}>
                <h3>Add a video link  and  video description </h3>
                    <label>Video Link :</label>
                    <input 
                    type="text"
                    onChange={(e)=>{setYoutubeVideo(e.target.value)}}
                    value={youtubeVideo}  
                     />

                    < label>Video Description :</label>
                    <input
                    type="text"
                    onChange={(e)=>setVideoDescription(e.target.value)}
                    value={videoDescription}
                     />

                     <button>Done</button>


            </form>
        </div>







    );

}

export default  AddVideoLinkSubtitle