import { PopupMenu } from "react-simple-widgets";
import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router"
import "./ProfileDropdownMenu.scss";

export default function ProfileDropdownMenu() {
  const navigate =useNavigate();

  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  console.log(id);

  const handleOnClick = async(e) =>{
    e.preventDefault()
    axios.get(`http://localhost:5000/api/corporateTrainee/logout`)
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
//   // navigate(`/MyCourses?id=${id}`);
//   navigate(0);
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

              <h5 className="text-center mb-0">John Doe</h5>
              <p className="text-center mb-2">jd@gmail.com</p>

              <hr />

              <p
                className="mb-0"
                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
              >
                ROLES
              </p>
              <p style={{ fontSize: 12 }}>
                {["Submitter", "Project manager", "Change control board"].join(
                  ", "
                )}
              </p>

              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -24px 0" }}
              >
                <button className="list-group-item list-group-item-action px-4" onClick={() => window.location.href = `/MyCourses?id=${id}`}>  
                <small>My Courses</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Report</small>
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
