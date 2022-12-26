import { PopupMenu } from "react-simple-widgets";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from "react-router";
import "./ProfileDropdownMenu.scss";

export default function IndividualProfileDropdownMenu() {
  const navigate =useNavigate();

  const[trainee, setTrainee]= useState([])
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  console.log(id);

  useEffect( ()=>{
    const fetchTrainee =async () =>{
        await axios.get(`http://localhost:5000/api/individualTrainee/profile?id=${id}`).then(
       (res) => { 
           const response = res.data
           //console.log(courses)
           setTrainee(response)
          }
          );
        }
        
        // }
        
        fetchTrainee()
      }, [])

      const openProfile = () => {
        navigate(`/api/individualTrainee/getProfile?id=${id}`);
    }

  const handleOnClick = async(e) =>{
    e.preventDefault()
    axios.get(`http://localhost:5000/api/individualTrainee/logout`)
    .then((res) => {
      navigate('/');
      navigate(0);
    })
    .catch((err) => {
      console.log(err);
  });
}

// const handleMyCourses = async(e) =>{
//   e.preventDefault()
//   console.log(id)
//   navigate(`/MyCourses?id=${id}`);
//   // navigate(0);
// }
  
  return (
    <div id="app">
      <div className="text-end">
        <PopupMenu>
            <button className="but">
              My profile
            </button>
          <div className="card text-start">
            <div className="card-body px-4 py-4">
              <div id="circle-avatar" className="text-center mx-auto mb-4">
                <span>K</span>
              </div>

              <h5 className="text-center mb-0" style={{
            textDecoration: isHovering ? 'underline' : '',
            color: isHovering ? 'blue' : 'black',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={()=>openProfile()}
          >{trainee.username}</h5>
              <p className="text-center mb-2">{trainee.email}</p>

              

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -24px 0" }}
              >
                <button className="list-group-item list-group-item-action px-4" onClick={() => window.location.href = `/MyEnrolledCourses?id=${id}`}>
                  <small>My Courses</small>
                </button>
                <button className="list-group-item list-group-item-action px-4" onClick={()=> navigate(`/ViewReports`)}>
                  <small>My Reports</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Add a Report</small>
                </button>

              </div>

              <hr style={{ margin: "0 -24px 24px" }} />

              <div className="d-grid">
                <button className="btn btn-secondary" onClick={handleOnClick}>
                  <small>Logout</small>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
      </div>
    </div>
  );
}
