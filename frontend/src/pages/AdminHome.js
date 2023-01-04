import {useNavigate} from "react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminHome(){

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    const navigate=useNavigate();

    const [stats, setStats] = useState("");

    useEffect(() => {
        const fetchData = async () => {
          await axios.get('http://localhost:5000/api/admin/getStats')
          
          .then((res) => {
            setStats(res.data);

            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
       
      }       
      fetchData();
  
      
      }, []);
   



    return (
        <body>
    <div id="wrapper">
        <nav className="navbar navbar-default navbar-cls-top " role="navigation" style = {{marginBottom: '0'}}> 
         
            {/* <div className="navbar-header"> */}
                <a  style={{color: 'white',
                            fontWeight: "bold", 
                            float: "left",
                            fontSize: '25px',
                            testAlign: "left"}}>Canadian Chamber of Commerce</a> 
            {/* </div> */}
    <div  style={{color: 'white', 
                padding: '15px 50px 5px 50px',
                float: 'right',
                fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust">Logout</a> 
    
    </div>
        </nav>   
                <nav className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
            <li className="text-center">
                    <img src="assets/img/find_user.png" className="user-image img-responsive"/>
					</li>
                <ul className="nav" id="main-menu">
	
                     <li>
                        <a  onClick={()=>  navigate(`/adminViewReports?id=${id}`)} style={{  cursor: "pointer", fontSize:"10px"}}><i className="fa fa-desktop fa-3x" style={{width: "140px"}}></i> User's Reports </a>
                    </li>
                    
						   <li  >
                        <a   onClick={()=>  navigate(`/api/admin/createAdmin?id=${id}`)} style={{  cursor: "pointer", fontSize:"10px"}}><i className="fa fa-edit fa-3x" style={{width: "139px"}}></i> Add an Admin</a>
                    </li>	
                      <li  >
                        <a  onClick={()=>  navigate(`/api/admin/createInstructor?id=${id}`)} style={{  cursor: "pointer", fontSize:"10px"}}><i className="fa fa-edit fa-3x" style={{width: "132px"}}></i> Add an Instructor</a>
                    </li>
                    <li  >
                        <a   onClick={()=>  navigate(`/api/admin/createCorporateTrainee?id=${id}`)} style={{  cursor: "pointer", fontSize:"9px"}}><i className="fa fa-edit fa-3x" style={{width: "105px"}}></i> Add a Corporate Trainee </a>
                    </li>
                    <li  >
                        <a  onClick={()=>  navigate(`/api/admin/changePassword?id=${id}`)} style={{  cursor: "pointer", fontSize:"10px"}}><i className="fa fa-edit fa-3x" style={{width: "115px"}}></i> Change My Password</a>
                    </li>
                    <li>
                        <a  onClick={()=>  navigate(`/api/admin/accessRequests?id=${id}`)} style={{  cursor: "pointer", fontSize:"10px"}}><i className="fa fa-table fa-3x" style={{width: "135px"}}></i> Course Requests </a>
                    </li>
                    <li  >
                        <a  onClick={()=>  navigate(`/api/admin/RefundsRequests?id=${id}`)} style={{  cursor: "pointer", fontSize:"10px"}}><i className="fa fa-table fa-3x" style={{width: "130px"}}></i> Refund Requests </a>
                    </li>
                    <li  >
                        <a   onClick={()=>  navigate(`/promotion?id=${id}`)} style={{  cursor: "pointer", fontSize:"10px"}}><i className="fa fa-bar-chart-o fa-3x" style={{width: "137px"}}></i> Set a Promotion </a>
                    </li>				
					
                </ul>
            </div>
            
        </nav>  
        <div id="page-wrapper" >
        <br/>
            <div id="page-inner">
                <br/>
                <div className="row">
                    <div className="col-md-12">
                     <h2>Welcome Admin</h2>   
                        <h5>Love to see you back. </h5>
                    </div>
                </div>              
                  <hr />
                <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">           
                <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-green set-icon">
                    <i className="fa fa-bars"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">{stats.numInstructors}</p>
                    <p className="text-muted">Instructors</p>
                </div>
             </div>
		     </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">           
			<div className="panel panel-back noti-box">
                <span className="icon-box bg-color-green set-icon">
                    <i className="fa fa-bars"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">{stats.numCorporateTrainees}</p>
                    <p className="text-muted">Corp. Trainees</p>
                </div>
             </div>
		     </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">           
                    <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-green set-icon">
                    <i className="fa fa-bars"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">{stats.numInsdividualTrainees}</p>
                    <p className="text-muted">Ind. Trainees</p>
                </div>
             </div>
		     </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">           
                    <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-green set-icon">
                    <i className="fa fa-bars"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">{stats.numCourses}</p>
                    <p className="text-muted">Courses</p>
                </div>
             </div>
		     </div>
			</div>
            <hr />

            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">           
			<div className="panel panel-back noti-box">
                <span className="icon-box bg-color-red set-icon">
                    <i className="fa fa-envelope-o"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">{stats.numCorporates}</p>
                    <p className="text-muted">Corporates</p>
                </div>
             </div>
		     </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">           
                    <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-blue set-icon">
                    <i className="fa fa-bell-o"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">{stats.numReportsUnResolved}</p>
                    <p className="text-muted">Unresolved Reports</p>
                </div>
             </div>
		     </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">           
                    <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-brown set-icon">
                    <i className="fa fa-rocket"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">{stats.numRequests}</p>
                    <p className="text-muted">Access Requests</p>
                </div>
             </div>
		     </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">           
			<div className="panel panel-back noti-box">
                <span className="icon-box bg-color-brown set-icon">
                    <i className="fa fa-rocket"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">{stats.numRefunds}</p>
                    <p className="text-muted">Refund Requests</p>
                </div>
             </div>
		     </div>
			</div>            
            <hr />
		     </div>
        </div>
                     
        </div>
     
        </body>  
   

)}
