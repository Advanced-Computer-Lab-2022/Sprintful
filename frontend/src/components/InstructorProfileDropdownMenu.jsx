import { PopupMenu } from "react-simple-widgets";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from "react-router";
import "./ProfileDropdownMenu.scss";


export default function IndividualProfileDropdownMenu() {
  const navigate =useNavigate();
  const [instructor, setInstructor] = useState([])

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
    const fetchInstructor =async () =>{
        await axios.get(`http://localhost:5000/api/instructor/profile?id=${id}`).then(
       (res) => { 
           const response = res.data
           //console.log(courses)
           setInstructor(response)
          }
          );
        }
        
        // }
        
        fetchInstructor()
      }, [])
      
      const openProfile = () => {
          navigate(`/api/instructor/getProfile?id=${id}`);
      }

  const handleOnClick = async(e) =>{
    e.preventDefault()
    axios.get(`http://localhost:5000/api/instructor/logout`)
    .then((res) => {
      navigate('/');
      navigate(0);
    })
    .catch((err) => {
      console.log(err);
  });

}
  
  return (
    <div id="app">
      <div className="text-end">
        <PopupMenu>
            <button>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                     className="rounded-circle img-fluid" style={{width: "30px", height: "30px", marginTop:12, float: "left", left: "200px"}}/>
            </button>
          <div className="card text-start">
            <div className="card-body px-4 py-4">
              <div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                     className="rounded-circle img-fluid" style={{width: "50px", height: "50px"}}/>
              </div>

              <h5 className="text-center mb-0" style={{
            textDecoration: isHovering ? 'underline' : '',
            color: isHovering ? 'blue' : 'black',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={()=>openProfile()}
          >{instructor.username}</h5>
              <p className="text-center mb-2">{instructor.email}</p>

              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -24px 0" }}
              >
                <button className="list-group-item list-group-item-action px-4" onClick={() => navigate(`/api/instructor/reportProblem?id=${id}`)}>
                  <small style={{color: "black", fontFamily: "Times New Roman"}}>Report a Problem</small>
                </button>
                <button className="list-group-item list-group-item-action px-4" onClick={() => window.location.href= `/api/instructor/ViewReports?id=${id}`}>
                  <small style={{color: "black", fontFamily: "Times New Roman"}}>My Reports</small>
                </button>
              </div>

              <hr style={{ margin: "0 -24px 24px" }} />

              <div className="d-grid">
              <button onClick={handleOnClick} style={{backgroundColor:"#dc3545", 
                                                            borderRadius:"3px", 
                                                            color: 'white', 
                                                            // padding: '15px 50px 5px 50px',
                                                            float: 'center',
                                                            fontSize: '10px',
                                                            minHeight:"30px", 
                                                            minWidth: "30px",
                                                            position: "relative"}}> Logout </button> 
              </div>
            </div>
          </div>
        </PopupMenu>
      </div>
    </div>
  );
}
