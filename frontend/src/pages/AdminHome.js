import {useNavigate} from "react-router";


export default function AdminHome(){

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    const navigate=useNavigate();
   



    return (
        <body>
    <div id="wrapper">
        <nav className="navbar navbar-default navbar-cls-top " role="navigation" style = {{marginBottom: '0'}}> 
         
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">Binary admin</a> 
            </div>
    <div  style={{color: 'white', 
                padding: '15px 50px 5px 50px',
                float: 'right',
                fontSize: '16px' }}> Last access : 30 May 2014 &nbsp; <a href="#" className="btn btn-danger square-btn-adjust">Logout</a> 
    
    </div>
        </nav>   
                <nav className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
            <li className="text-center">
                    <img src="assets/img/find_user.png" className="user-image img-responsive"/>
					</li>
                <ul className="nav" id="main-menu">
				
				
					
                    {/* <li>
                        <a className="active-menu"  href="index.html"><i className="fa fa-dashboard fa-3x"></i> Dashboard</a>
                    </li> */}
                     <li>
                        <a  href="ui.html"><i className="fa fa-desktop fa-3x" style={{width: "130px"}} onClick={()=>  navigate(`/adminViewReports`)}></i> User's Reports </a>
                    </li>
                    <li>
                        <a  href="tab-panel.html"><i className="fa fa-qrcode fa-3x" style={{width: "130px"}}></i> Course Requests </a>
                    </li>
						   <li  >
                        <a   href="chart.html"><i className="fa fa-bar-chart-o fa-3x" style={{width: "130px"}}></i> Add an Admin</a>
                    </li>	
                      <li  >
                        <a  href="table.html"><i className="fa fa-table fa-3x" style={{width: "130px"}}></i> Add an Instructor</a>
                    </li>
                    <li  >
                        <a  href="form.html"><i className="fa fa-edit fa-3x" style={{width: "100px"}}></i> Add a Corporate Trainee </a>
                    </li>
                    <li  >
                        <a  href="form.html"><i className="fa fa-edit fa-3x" style={{width: "130px"}}></i> Refund Requests </a>
                    </li>
                    <li  >
                        <a  href="form.html"><i className="fa fa-edit fa-3x" style={{width: "130px"}}></i> Set a Promotion </a>
                    </li>				
					
					                   
                    {/* <li>
                        <a href="#"><i className="fa fa-sitemap fa-3x"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                        <ul className="nav nav-second-level">
                            <li>
                                <a href="#">Second Level Link</a>
                            </li>
                            <li>
                                <a href="#">Second Level Link</a>
                            </li>
                            <li>
                                <a href="#">Second Level Link<span className="fa arrow"></span></a>
                                <ul className="nav nav-third-level">
                                    <li>
                                        <a href="#">Third Level Link</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Link</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Link</a>
                                    </li>

                                </ul>
                               
                            </li>
                        </ul>
                      </li>   */}
                  {/* <li  >
                        <a  href="blank.html"><i className="fa fa-square-o fa-3x"></i> Blank Page</a>
                    </li>	 */}
                </ul>
            </div>
            
        </nav>  
        <div id="page-wrapper" >
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                     <h2>Admin Dashboard</h2>   
                        <h5>Welcome Admin , Love to see you back. </h5>
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
                    <p className="main-text">120 New</p>
                    <p className="text-muted">Messages</p>
                </div>
             </div>
		     </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">           
			<div className="panel panel-back noti-box">
                <span className="icon-box bg-color-green set-icon">
                    <i className="fa fa-bars"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">30 Tasks</p>
                    <p className="text-muted">Remaining</p>
                </div>
             </div>
		     </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">           
			<div className="panel panel-back noti-box">
                <span className="icon-box bg-color-blue set-icon">
                    <i className="fa fa-bell-o"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">240 New</p>
                    <p className="text-muted">Notifications</p>
                </div>
             </div>
		     </div>
                    <div className="col-md-3 col-sm-6 col-xs-6">           
			<div className="panel panel-back noti-box">
                <span className="icon-box bg-color-brown set-icon">
                    <i className="fa fa-rocket"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">3 Orders</p>
                    <p className="text-muted">Pending</p>
                </div>
             </div>
		     </div>
			</div>
                <hr />                
                {/* <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">            */}
			{/* <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-blue">
                    <i className="fa fa-warning"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">52 Important Issues to Fix </p>
                    <p className="text-muted">Please fix these issues to work smooth</p>
                    <p className="text-muted">Time Left: 30 mins</p>
                    <hr />
                    <p className="text-muted">
                          <span className="text-muted color-bottom-txt"><i className="fa fa-edit"></i>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn. 
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn. 
                               </span>
                    </p>
                </div>
             </div> */}
		     </div>
                    
                    
                    {/* <div className="col-md-3 col-sm-12 col-xs-12">
                        <div className="panel back-dash">
                               <i className="fa fa-dashboard fa-3x"></i><strong> &nbsp; SPEED</strong>
                             <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing sit ametsit amet elit ftr. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                       
                    </div> */}
                    {/* <div className="col-md-3 col-sm-12 col-xs-12 ">
                        <div className="panel "> */}
          {/* <div className="main-temp-back">
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-6"> <i className="fa fa-cloud fa-3x"></i> Newyork City </div>
                <div className="col-xs-6">
                  <div className="text-temp"> 10° </div>
                </div>
              </div>
            </div>
          </div> */}
          
        </div>
                     {/* <div className="panel panel-back noti-box">
                <span className="icon-box bg-color-green set-icon">
                    <i className="fa fa-desktop"></i>
                </span>
                <div className="text-box" >
                    <p className="main-text">Display</p>
                    <p className="text-muted">Looking Good</p>
                </div>
             </div> */}
			
    {/* </div>
                        
        </div> */}
                {/* <div className="row"> 
                    
                      
                               <div className="col-md-9 col-sm-12 col-xs-12">                     
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Bar Chart Example
                        </div>
                        <div className="panel-body">
                            <div id="morris-bar-chart"></div>
                        </div>
                    </div>            
                </div>
                    <div className="col-md-3 col-sm-12 col-xs-12">                       
                    <div className="panel panel-primary text-center no-boder bg-color-green">
                        <div className="panel-body">
                            <i className="fa fa-bar-chart-o fa-5x"></i>
                            <h3>120 GB </h3>
                        </div>
                        <div className="panel-footer back-footer-green">
                           Disk Space Available
                            
                        </div>
                    </div>
                    <div className="panel panel-primary text-center no-boder bg-color-red">
                        <div className="panel-body">
                            <i className="fa fa-edit fa-5x"></i>
                            <h3>20,000 </h3>
                        </div>
                        <div className="panel-footer back-footer-red">
                            Articles Pending
                            
                        </div>
                    </div>                         
                        </div>
                
           </div> */}
                {/* <div className="row" >
                    <div className="col-md-3 col-sm-12 col-xs-12">
  <div className="panel panel-primary text-center no-boder bg-color-green">
                        <div className="panel-body">
                            <i className="fa fa-comments-o fa-5x"></i>
                            <h4>200 New Comments </h4>
                             <h4>See All Comments  </h4>
                        </div>
                        <div className="panel-footer back-footer-green">
                             <i className="fa fa-rocket fa-5x"></i>
                            Lorem ipsum dolor sit amet sit sit, consectetur adipiscing elitsit sit gthn ipsum dolor sit amet ipsum dolor sit amet
                            
                        </div>
                    </div>
                    </div>
                    <div className="col-md-9 col-sm-12 col-xs-12">
               
                    <div className="panel panel-default">
                        <div className="panel-heading">
                           Responsive Table Example
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                             <th>User No.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>100090</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>100090</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>100090</td>
                                        </tr>
                                         <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>100090</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>100090</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>100090</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div> */}
                {/* <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                   
                    <div className="chat-panel panel panel-default chat-boder chat-panel-head" >
                        <div className="panel-heading">
                            <i className="fa fa-comments fa-fw"></i>
                            Chat Box
                            <div className="btn-group pull-right">
                                <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-chevron-down"></i>
                                </button>
                                <ul className="dropdown-menu slidedown">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-refresh fa-fw"></i>Refresh
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-check-circle fa-fw"></i>Available
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-times fa-fw"></i>Busy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-clock-o fa-fw"></i>Away
                                        </a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-sign-out fa-fw"></i>Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="panel-body">
                            <ul className="chat-box">
                                <li className="left clearfix">
                                    <span className="chat-img pull-left">
                                        <img src="assets/img/1.png" alt="User" className="img-circle" />
                                    </span>
                                    <div className="chat-body">                                        
                                            <strong >Jack Sparrow</strong>
                                            <small className="pull-right text-muted">
                                                <i className="fa fa-clock-o fa-fw"></i>12 mins ago
                                            </small>                                      
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                        </p>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <span className="chat-img pull-right">

                                        <img src="assets/img/2.png" alt="User" className="img-circle" />
                                    </span>
                                    <div className="chat-body clearfix">
                                        
                                            <small className=" text-muted">
                                                <i className="fa fa-clock-o fa-fw"></i>13 mins ago</small>
                                            <strong className="pull-right">Jhonson Deed</strong>
                                      
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                        </p>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <span className="chat-img pull-left">
                                         <img src="assets/img/3.png" alt="User" className="img-circle" />
                                    </span>
                                    <div className="chat-body clearfix">
                                        
                                            <strong >Jack Sparrow</strong>
                                            <small className="pull-right text-muted">
                                                <i className="fa fa-clock-o fa-fw"></i>14 mins ago</small>
                                        
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                        </p>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <span className="chat-img pull-right">
                                         <img src="assets/img/4.png" alt="User" className="img-circle" />
                                    </span>
                                    <div className="chat-body clearfix">
                                      
                                            <small className=" text-muted">
                                                <i className="fa fa-clock-o fa-fw"></i>15 mins ago</small>
                                            <strong className="pull-right">Jhonson Deed</strong>
                                       
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                        </p>
                                    </div>
                                </li>
                                    <li className="left clearfix">
                                    <span className="chat-img pull-left">
                                        <img src="assets/img/1.png" alt="User" className="img-circle" />
                                    </span>
                                    <div className="chat-body">                                        
                                            <strong >Jack Sparrow</strong>
                                            <small className="pull-right text-muted">
                                                <i className="fa fa-clock-o fa-fw"></i>12 mins ago
                                            </small>                                      
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                        </p>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <span className="chat-img pull-right">
                                       <img src="assets/img/2.png" alt="User" className="img-circle" />
                                    </span>
                                    <div className="chat-body clearfix">
                                        
                                            <small className=" text-muted">
                                                <i className="fa fa-clock-o fa-fw"></i>13 mins ago</small>
                                            <strong className="pull-right">Jhonson Deed</strong>
                                      
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="panel-footer">
                            <div className="input-group">
                                <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message to send..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-warning btn-sm" id="btn-chat">
                                        Send
                                    </button>
                                </span>
                            </div>
                        </div>

                    </div>
                    
                </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                         <div className="panel panel-default">
                        <div className="panel-heading">
                           Label Examples
                        </div>
                        <div className="panel-body">
                            <span className="label label-default">Default</span>
    <span className="label label-primary">Primary</span>
    <span className="label label-success">Success</span>
    <span className="label label-info">Info</span>
    <span className="label label-warning">Warning</span>
    <span className="label label-danger">Danger</span>
                        </div>
                    </div>
                         
                         <div className="panel panel-default">
                        <div className="panel-heading">
                            Donut Chart Example
                        </div>
                        <div className="panel-body">
                            <div id="morris-donut-chart"></div>
                        </div>
                    </div>
                      
                    </div>
                </div>      */}
    {/* </div>
            </div> */}
        </div>
     
        </body>  
   

)}
