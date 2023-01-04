import { useState } from "react"
import {useNavigate} from "react-router";
import Alert from '@mui/material/Alert';

const AdminForm = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    const header = {
        color: "darkRed",
        fontFamily: "Times New Roman",
        fontSize: "28px",
        textAlign: "center",
        fontWeight: "bold"
        
      };
      const navigate=useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [clicked, setClicked] = useState(false)
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const NewUser = {username, password}
        const response = await fetch('http://localhost:5000/api/admin/createAdmin', {
            method: 'POST',
            body :JSON.stringify(NewUser),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await  response.json()
        console.log('New admin was added', json)
            setUsername('')
            setPassword('')

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setUsername('')
            setPassword('')
            setError(null)
            console.log('New admin was added', json)
            setClicked(true)
        }
    }

    return (
        <div style= {{  borderLeft: "2px solid silver",
        height: "1000px",
        //position:"absolute",
        //  left: "50%"
        borderRight: "2px solid silver",
        height: "1000px",
      }}>
            <div>
            <nav className="navbar navbar-default navbar-cls-top " role="navigation" style = {{marginBottom: '0', background: "silver"}}> 
            <a class="salata" data-dark-logo="/upload/logo.png" syle={{position: "relative"}}>

                                <img src="/upload/logo.png" alt="Homepage" style={{width: "140px", 
                                                                                    height: "60px",
                                                                                    marginRight: "900px"}}/>
                            </a>
         
         {/* <div className="navbar-header"> */}
             {/* <a  style={{color: 'white',
                         fontWeight: "bold", 
                         float: "left",
                         fontSize: '25px',
                         testAlign: "left"}}>Canadian Chamber of Commerce</a>  */}
         {/* </div> */}
 <div  style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'right',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust">Logout</a> 
 
 </div>
     </nav>
     </div>
   


     <hr/> 
     <br/>  
     <div style={header}>Add a new Admin</div>
     <br/>
     <br/>
     <div>
            <form className="create" onSubmit={handleSubmit} style={{color: "#000000"}}>
                {/* , textAlign: "center", left: "100px"}}>  */}
            
         
                    <label style={{color: "black", fontFamily: "Times New Roman"}}>User name: </label>
                   
                        <input 
                        type="text"
                        style={{width: 200}}
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required/>
                        

                     <label style={{color: "black", fontFamily: "Times New Roman"}}>Password: </label>
                    
                        <input 
                        type="text"
                        style={{width: 200}}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required/>
            
            <br/>
                    <br/>
                    <br/>
                    <br/>

                    {/* <div  onClick={()=> handleSubmit()} style={{color: 'white', 
                                padding: '15px 50px 5px 50px',
                                float: 'center',
                                fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Create </a> 
                                </div> */}

                       
                            <button style={{backgroundColor:"#dc3545", 
                                                                            borderRadius:"3px", 
                                                                            color: 'white', 
                                                                            // padding: '15px 50px 5px 50px',
                                                                            float: 'center',
                                                                            fontSize: '10px',
                                                                            minHeight:"30px", 
                                                                            minWidth: "50px",
                                                                            position: "relative",
                                                                            left: "200px"}}> Create </button> 
                                                                            <br/>
                      {clicked &&  <Alert style={{width: "300px", fontSize: "10px", color: "black"}}>
                        An Admin has been created successfully!
                        </Alert>}

                                 
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            </form>
            </div>
            <div  onClick={()=> navigate(`/admin?id=${id}`)} style={{color: 'white', 
             padding: '15px 50px 5px 50px',
             float: 'left',
             fontSize: '16px'}}> &nbsp; <a className="btn btn-danger square-btn-adjust"> Back </a> 
             </div>

             <br/>
                    <br/>
                    <br/>
                    <br/>

             <footer style={{height: "100px"}}>
                <div className="container" style={{height: "20px"}}>
                    <div className="row">
                    <div className="col-lg-4">
                            <div className="about">
                                    <img src="/upload/logo.png" alt="Homepage" style={{width: "180px", 
                                                                                    height: "70px"}}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="contact-us">
                                <h4 style= {{color: "black",  fontFamily: "Times New Roman"}}>Contact Us</h4>
                                <p style={{ fontFamily: "Times New Roman"}}>If you have any suggestions email us on info@cancham.org.eg</p>
                                <p style={{ fontFamily: "Times New Roman"}}>Call us +201001004070 from 9 AM to 4 PM</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-us">
                                <h4 style= {{color: "black",  fontFamily: "Times New Roman"}}>Location</h4>
                                <p style={{ fontFamily: "Times New Roman"}}>Villa 25 Mourad street off Orouba, Heliopolis، Almazah, Heliopolis, Cairo Governorate 11475</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sub-footer">
                                <label>© 2023 CANADIAN CHAMBER OF COMMERCE. ALL RIGHTS RESERVED.</label>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </footer>
        </div>
       
    )
}
export default AdminForm