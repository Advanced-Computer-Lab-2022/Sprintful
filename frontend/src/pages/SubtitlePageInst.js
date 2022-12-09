import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";




const SubtitlePageInst= ()=>{
    //states
    const[content,setContent]=useState('');
    const [title,setTitle]=useState('')
    const [totalHours,setTotalHours]=useState(0);
    const [videoLink,setVideoLink]=useState("");
    const [videoDescription,setVideoDescription]=useState("");

    //useNavigate
    const navigate =useNavigate();

    //params 
    const params=useParams();
    const courseid=params.courseid;
    const subtitleid=params.subtitleid;


//function for fetching subtitle data
    const fetchdata=async()=>{
    
        
        const response =await axios.get(`/api/subtitles/${courseid}/${subtitleid}`)
        const subtitle=response.data;
        setContent(subtitle.content);
        setTitle(subtitle.title);
        setTotalHours(subtitle.totalHours );
        setVideoLink(subtitle.youtubevideo);
        setVideoDescription(subtitle.videoDescription)
    }

// useEffect for fetching the data in the very 1st render 
    useEffect(()=>{fetchdata();},[]);


    //Handling Navigation to Adding videoLink and Video Description to a Subtitle
    const handleAddVideoLink=()=>{
        navigate(`/api/subtitles/addVideoLink/${subtitleid}`)
        navigate(0)

    }


    //title
    // let title='';
    // //content 
    // let content=''; //it is not a state because we do not need to keep a track of it (it will not change based on sth. the user done)
    // // total Hours 
    // let  totalHours=0;
    // //Youtube video Link
    // let videoLink='';
    // //video Description 
    // let videoDescription='';




    return (

    <div className="create">
        <h2>{title}</h2>
        <label>Total hours : {totalHours}</label>
        <h3>Subtitle Content :</h3>
        <p>{content}</p>

        <br></br>
        <br></br>

        <a href={videoLink}>Click to view Youtube Video</a>

        <label>Video Description :</label>
        
        <p>{videoDescription}</p>

        <button onClick={handleAddVideoLink}>Add video Link and Description </button>




    </div>



    )



}

export default SubtitlePageInst ;