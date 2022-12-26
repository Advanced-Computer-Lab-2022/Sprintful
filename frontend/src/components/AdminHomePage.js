export default function AdminHomePage() {
    return (
<div className="skin-blue">
    {console.log("hello")}

<div className="wrapper">
  
  <header className="main-header">
    
    {/* <a href="index2.html" className="logo"><b>Admin</b>LTE</a> */}
    
    <nav className="navbar navbar-static-top" role="navigation">
      
      <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          
          <li className="dropdown messages-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-envelope-o"></i>
              <span className="label label-success">4</span>
            </a>
            <ul className="dropdown-menu">
              <li className="header">You have 4 messages</li>
              <li>
                
                <ul className="menu">
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                      </div>
                      <h4>
                        Support Team
                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="user image"/>
                      </div>
                      <h4>
                        AdminLTE Design Team
                        <small><i className="fa fa-clock-o"></i> 2 hours</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="user image"/>
                      </div>
                      <h4>
                        Developers
                        <small><i className="fa fa-clock-o"></i> Today</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="user image"/>
                      </div>
                      <h4>
                        Sales Department
                        <small><i className="fa fa-clock-o"></i> Yesterday</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="user image"/>
                      </div>
                      <h4>
                        Reviewers
                        <small><i className="fa fa-clock-o"></i> 2 days</small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"><a href="#">See All Messages</a></li>
            </ul>
          </li>

          <li className="dropdown notifications-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-bell-o"></i>
              <span className="label label-warning">10</span>
            </a>
            <ul className="dropdown-menu">
              <li className="header">You have 10 notifications</li>
              <li>
                
                <ul className="menu">
                  <li>
                    <a href="#">
                      <i className="fa fa-users text-aqua"></i> 5 new members joined today
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the page and may cause design problems
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-users text-red"></i> 5 new members joined
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-user text-red"></i> You changed your username
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"><a href="#">View all</a></li>
            </ul>
          </li>

          <li className="dropdown tasks-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-flag-o"></i>
              <span className="label label-danger">9</span>
            </a>
            <ul className="dropdown-menu">
              <li className="header">You have 9 tasks</li>
              <li>

                <ul className="menu">
                  <li>
                    <a href="#">
                      <h3>
                        Design some buttons
                        <small className="pull-right">20%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h3>
                        Create a nice theme
                        <small className="pull-right">40%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-green" style="width: 40%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">40% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h3>
                        Some task I need to do
                        <small className="pull-right">60%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-red" style="width: 60%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h3>
                        Make beautiful transitions
                        <small className="pull-right">80%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-yellow" style="width: 80%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">80% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>
          
          <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
              <span className="hidden-xs">Alexander Pierce</span>
            </a>
            <ul className="dropdown-menu">
              
              <li className="user-header">
                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              
              <li className="user-div">
                <div className="col-xs-4 text-center">
                  <a href="#">Followers</a>
                </div>
                <div className="col-xs-4 text-center">
                  <a href="#">Sales</a>
                </div>
                <div className="col-xs-4 text-center">
                  <a href="#">Friends</a>
                </div>
              </li>
              
              <li className="user-footer">
                <div className="pull-left">
                  <a href="#" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a href="#" className="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <aside className="main-sidebar">

    <section className="sidebar">

      <div className="user-panel">
        <div className="pull-left image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
        </div>
        <div className="pull-left info">
          <p>Alexander Pierce</p>

          <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..."/>
          <span className="input-group-btn">
            <button type='submit' name='search' id='search-btn' className="btn btn-flat"><i className="fa fa-search"></i></button>
          </span>
        </div>
      </form>
      <ul className="sidebar-menu">
        <li className="header">MAIN NAVIGATION</li>
        <li className="active treeview">
          <a href="#">
            <i className="fa fa-dashboard"></i> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"></i>
          </a>
          <ul className="treeview-menu">
            <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
            <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-files-o"></i>
            <span>Layout Options</span>
            <span className="label label-primary pull-right">4</span>
          </a>
          <ul className="treeview-menu">
            <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
            <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
            <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
            <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
          </ul>
        </li>
        <li>
          <a href="pages/widgets.html">
            <i className="fa fa-th"></i> <span>Widgets</span> <small className="label pull-right bg-green">new</small>
          </a>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-pie-chart"></i>
            <span>Charts</span>
            <i className="fa fa-angle-left pull-right"></i>
          </a>
          <ul className="treeview-menu">
            <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
            <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
            <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-laptop"></i>
            <span>UI Elements</span>
            <i className="fa fa-angle-left pull-right"></i>
          </a>
          <ul className="treeview-menu">
            <li><a href="pages/UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
            <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o"></i> Icons</a></li>
            <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</a></li>
            <li><a href="pages/UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</a></li>
            <li><a href="pages/UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</a></li>
            <li><a href="pages/UI/modals.html"><i className="fa fa-circle-o"></i> Modals</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-edit"></i> <span>Forms</span>
            <i className="fa fa-angle-left pull-right"></i>
          </a>
          <ul className="treeview-menu">
            <li><a href="pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
            <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
            <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-table"></i> <span>Tables</span>
            <i className="fa fa-angle-left pull-right"></i>
          </a>
          <ul className="treeview-menu">
            <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
            <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
          </ul>
        </li>
        <li>
          <a href="pages/calendar.html">
            <i className="fa fa-calendar"></i> <span>Calendar</span>
            <small className="label pull-right bg-red">3</small>
          </a>
        </li>
        <li>
          <a href="pages/mailbox/mailbox.html">
            <i className="fa fa-envelope"></i> <span>Mailbox</span>
            <small className="label pull-right bg-yellow">12</small>
          </a>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-folder"></i> <span>Examples</span>
            <i className="fa fa-angle-left pull-right"></i>
          </a>
          <ul className="treeview-menu">
            <li><a href="pages/examples/invoice.html"><i className="fa fa-circle-o"></i> Invoice</a></li>
            <li><a href="pages/examples/login.html"><i className="fa fa-circle-o"></i> Login</a></li>
            <li><a href="pages/examples/register.html"><i className="fa fa-circle-o"></i> Register</a></li>
            <li><a href="pages/examples/lockscreen.html"><i className="fa fa-circle-o"></i> Lockscreen</a></li>
            <li><a href="pages/examples/404.html"><i className="fa fa-circle-o"></i> 404 Error</a></li>
            <li><a href="pages/examples/500.html"><i className="fa fa-circle-o"></i> 500 Error</a></li>
            <li><a href="pages/examples/blank.html"><i className="fa fa-circle-o"></i> Blank Page</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-share"></i> <span>Multilevel</span>
            <i className="fa fa-angle-left pull-right"></i>
          </a>
          <ul className="treeview-menu">
            <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
            <li>
              <a href="#"><i className="fa fa-circle-o"></i> Level One <i className="fa fa-angle-left pull-right"></i></a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                <li>
                  <a href="#"><i className="fa fa-circle-o"></i> Level Two <i className="fa fa-angle-left pull-right"></i></a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
          </ul>
        </li>
        <li><a href="documentation/index.html"><i className="fa fa-book"></i> Documentation</a></li>
        <li className="header">LABELS</li>
        <li><a href="#"><i className="fa fa-circle-o text-danger"></i> Important</a></li>
        <li><a href="#"><i className="fa fa-circle-o text-warning"></i> Warning</a></li>
        <li><a href="#"><i className="fa fa-circle-o text-info"></i> Information</a></li>
      </ul>
    </section>
  </aside>

  <div className="content-wrapper">
    <section className="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
        <li className="active">Dashboard</li>
      </ol>
    </section>

    <section className="content">
      <div className="row">
        <div className="col-lg-3 col-xs-6">
          <div className="small-box bg-aqua">
            <div className="inner">
              <h3>150</h3>
              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag"></i>
            </div>
            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          
          <div className="small-box bg-green">
            <div className="inner">
              <h3>53<sup style="font-size: 20px">%</sup></h3>
              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars"></i>
            </div>
            <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          
        <div className="small-box bg-yellow">
                <div className="inner">
                  <h3>44</h3>
                  <p>User Registrations</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add"></i>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-red">
                <div className="inner">
                  <h3>65</h3>
                  <p>Unique Visitors</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph"></i>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
          </div>
          <div className="row">

            <section className="col-lg-7 connectedSortable">

              <div className="nav-tabs-custom">
                <ul className="nav nav-tabs pull-right">
                  <li className="active"><a href="#revenue-chart" data-toggle="tab">Area</a></li>
                  <li><a href="#sales-chart" data-toggle="tab">Donut</a></li>
                  <li className="pull-left header"><i className="fa fa-inbox"></i> Sales</li>
                </ul>
                <div className="tab-content no-padding">
                  <div className="chart tab-pane active" id="revenue-chart" style="position: relative; height: 300px;"></div>
                  <div className="chart tab-pane" id="sales-chart" style="position: relative; height: 300px;"></div>
                </div>
              </div>

              <div className="box box-success">
                <div className="box-header">
                  <i className="fa fa-comments-o"></i>
                  <h3 className="box-title">Chat</h3>
                  <div className="box-tools pull-right" data-toggle="tooltip" title="Status">
                    <div className="btn-group" data-toggle="btn-toggle" >
                      <button type="button" className="btn btn-default btn-sm active"><i className="fa fa-square text-green"></i></button>
                      <button type="button" className="btn btn-default btn-sm"><i className="fa fa-square text-red"></i></button>
                    </div>
                  </div>
                </div>
                <div className="box-div chat" id="chat-box">
                  <div className="item">
                    <img src="dist/img/user4-128x128.jpg" alt="user image" className="online"/>
                    <p className="message">
                      <a href="#" className="name">
                        <small className="text-muted pull-right"><i className="fa fa-clock-o"></i> 2:15</small>
                        Mike Doe
                      </a>
                      I would like to meet you to discuss the latest news about
                      the arrival of the new theme. They say it is going to be one the
                      best themes on the market
                    </p>
                    <div className="attachment">
                      <h4>Attachments:</h4>
                      <p className="filename">
                        Theme-thumbnail-image.jpg
                      </p>
                      <div className="pull-right">
                        <button className="btn btn-primary btn-sm btn-flat">Open</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="item">
                    <img src="dist/img/user3-128x128.jpg" alt="user image" className="offline"/>
                    <p className="message">
                      <a href="#" className="name">
                        <small className="text-muted pull-right"><i className="fa fa-clock-o"></i> 5:15</small>
                        Alexander Pierce
                      </a>
                      I would like to meet you to discuss the latest news about
                      the arrival of the new theme. They say it is going to be one the
                      best themes on the market
                    </p>
                  </div>
                  <div className="item">
                    <img src="dist/img/user2-160x160.jpg" alt="user image" className="offline"/>
                    <p className="message">
                      <a href="#" className="name">
                        <small className="text-muted pull-right"><i className="fa fa-clock-o"></i> 5:30</small>
                        Susan Doe
                      </a>
                      I would like to meet you to discuss the latest news about
                      the arrival of the new theme. They say it is going to be one the
                      best themes on the market
                    </p>
                  </div>
                </div>
                <div className="box-footer">
                  <div className="input-group">
                    <input className="form-control" placeholder="Type message..."/>
                    <div className="input-group-btn">
                      <button className="btn btn-success"><i className="fa fa-plus"></i></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box box-primary">
                <div className="box-header">
                  <i className="ion ion-clipboard"></i>
                  <h3 className="box-title">To Do List</h3>
                  <div className="box-tools pull-right">
                    <ul className="pagination pagination-sm inline">
                      <li><a href="#">&laquo;</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">&raquo;</a></li>
                    </ul>
                  </div>
                </div>
                <div className="box-div">
                  <ul className="todo-list">
                    <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                      <input type="checkbox" value="" name=""/>

                      <span className="text">Design a nice theme</span>

                      <small className="label label-danger"><i className="fa fa-clock-o"></i> 2 mins</small>

                      <div className="tools">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                      <input type="checkbox" value="" name=""/>
                      <span className="text">Make the theme responsive</span>
                      <small className="label label-info"><i className="fa fa-clock-o"></i> 4 hours</small>
                      <div className="tools">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                      <input type="checkbox" value="" name=""/>
                      <span className="text">Let theme shine like a star</span>
                      <small className="label label-warning"><i className="fa fa-clock-o"></i> 1 day</small>
                      <div className="tools">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                      <input type="checkbox" value="" name=""/>
                      <span className="text">Let theme shine like a star</span>
                      <small className="label label-success"><i className="fa fa-clock-o"></i> 3 days</small>
                      <div className="tools">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                      <input type="checkbox" value="" name=""/>
                      <span className="text">Check your messages and notifications</span>
                      <small className="label label-primary"><i className="fa fa-clock-o"></i> 1 week</small>
                      <div className="tools">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                      <input type="checkbox" value="" name=""/>
                      <span className="text">Let theme shine like a star</span>
                      <small className="label label-default"><i className="fa fa-clock-o"></i> 1 month</small>
                      <div className="tools">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-o"></i>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="box-footer clearfix no-border">
                  <button className="btn btn-default pull-right"><i className="fa fa-plus"></i> Add item</button>
                </div>
              </div>


              <div className="box box-info">
                <div className="box-header">
                  <i className="fa fa-envelope"></i>
                  <h3 className="box-title">Quick Email</h3>

                  <div className="pull-right box-tools">
                    <button className="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-div">
                  <form action="#" method="post">
                    <div className="form-group">
                      <input type="email" className="form-control" name="emailto" placeholder="Email to:"/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" placeholder="Subject"/>
                    </div>
                    <div>
                      <textarea className="textarea" placeholder="Message" style="width: 100%; height: 125px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
                    </div>
                  </form>
                </div>
                <div className="box-footer clearfix">
                  <button className="pull-right btn btn-default" id="sendEmail">Send <i className="fa fa-arrow-circle-right"></i></button>
                </div>
              </div>

            </section>
            <section className="col-lg-5 connectedSortable">

              <div className="box box-solid bg-light-blue-gradient">
                <div className="box-header">
                  <div className="pull-right box-tools">
                    <button className="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip" title="Date range"><i className="fa fa-calendar"></i></button>
                    <button className="btn btn-primary btn-sm pull-right" data-widget='collapse' data-toggle="tooltip" title="Collapse" style="margin-right: 5px;"><i className="fa fa-minus"></i></button>
                  </div>

                  <i className="fa fa-map-marker"></i>
                  <h3 className="box-title">
                    Visitors
                  </h3>
                </div>
                <div className="box-div">
                  <div id="world-map" style="height: 250px; width: 100%;"></div>
                </div>
                <div className="box-footer no-border">
                  <div className="row">
                    <div className="col-xs-4 text-center" style="border-right: 1px solid #f4f4f4">
                      <div id="sparkline-1"></div>
                      <div className="knob-label">Visitors</div>
                    </div>
                    <div className="col-xs-4 text-center" style="border-right: 1px solid #f4f4f4">
                      <div id="sparkline-2"></div>
                      <div className="knob-label">Online</div>
                    </div>
                    <div className="col-xs-4 text-center">
                      <div id="sparkline-3"></div>
                      <div className="knob-label">Exists</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box box-solid bg-teal-gradient">
                <div className="box-header">
                  <i className="fa fa-th"></i>
                  <h3 className="box-title">Sales Graph</h3>
                  <div className="box-tools pull-right">
                    <button className="btn bg-teal btn-sm" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn bg-teal btn-sm" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-div border-radius-none">
                  <div className="chart" id="line-chart" style="height: 250px;"></div>
                </div>
                <div className="box-footer no-border">
                  <div className="row">
                    <div className="col-xs-4 text-center" style="border-right: 1px solid #f4f4f4">
                      <input type="text" className="knob" data-readonly="true" value="20" data-width="60" data-height="60" data-fgColor="#39CCCC"/>
                      <div className="knob-label">Mail-Orders</div>
                    </div>
                    <div className="col-xs-4 text-center" style="border-right: 1px solid #f4f4f4">
                      <input type="text" className="knob" data-readonly="true" value="50" data-width="60" data-height="60" data-fgColor="#39CCCC"/>
                      <div className="knob-label">Online</div>
                    </div>
                    <div className="col-xs-4 text-center">
                      <input type="text" className="knob" data-readonly="true" value="30" data-width="60" data-height="60" data-fgColor="#39CCCC"/>
                      <div className="knob-label">In-Store</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box box-solid bg-green-gradient">
                <div className="box-header">
                  <i className="fa fa-calendar"></i>
                  <h3 className="box-title">Calendar</h3>
                  <div className="pull-right box-tools">
                    <div className="btn-group">
                      <button className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bars"></i></button>
                      <ul className="dropdown-menu pull-right" role="menu">
                        <li><a href="#">Add new event</a></li>
                        <li><a href="#">Clear events</a></li>
                        <li className="divider"></li>
                        <li><a href="#">View calendar</a></li>
                      </ul>
                    </div>
                    <button className="btn btn-success btn-sm" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn btn-success btn-sm" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-div no-padding">

                  <div id="calendar" style="width: 100%"></div>
                </div>
                <div className="box-footer text-black">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="clearfix">
                        <span className="pull-left">Task #1</span>
                        <small className="pull-right">90%</small>
                      </div>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-green" style="width: 90%;"></div>
                      </div>

                      <div className="clearfix">
                        <span className="pull-left">Task #2</span>
                        <small className="pull-right">70%</small>
                      </div>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-green" style="width: 70%;"></div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="clearfix">
                        <span className="pull-left">Task #3</span>
                        <small className="pull-right">60%</small>
                      </div>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-green" style="width: 60%;"></div>
                      </div>

                      <div className="clearfix">
                        <span className="pull-left">Task #4</span>
                        <small className="pull-right">40%</small>
                      </div>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-green" style="width: 40%;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </section>
          </div>

        </section>
      </div>
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 2.0
        </div>
        <strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights reserved.
      </footer>
    </div>
  </div>
  
    )}


