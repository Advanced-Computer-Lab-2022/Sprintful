import { useState } from "react"
import {useNavigate} from "react-router";


const CorporateTraineeForm = () => {
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
    const [corporate, setCorporate] = useState("bahamas")
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState(null)
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const newUser = {username, password, corporate, firstName, lastName}
        console.log(newUser)
        const response = await fetch('http://localhost:5000/api/corporateTrainee/createCorporateTrainee', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setUsername('')
            setPassword('')
            setCorporate('')
            setFirstName('')
            setLastName('')
            setError(null)
            console.log('New corporate trainee was added', json)
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
     <div style={header}>Add a new Corporate Trainee</div>
     <br/>
     <br/>
       <div>
        <form className="create" onSubmit={handleSubmit}> 

                 <label  style={{color: "black", fontFamily: "Times New Roman"}}>User name:</label>
                    <input style={{width: 200 }}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required/>

                <label  style={{color: "black", fontFamily: "Times New Roman"}}>First Name:</label>
                    <input style={{width: 200}}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required/>

                 <label  style={{color: "black", fontFamily: "Times New Roman"}}>Last Name:</label>
                    <input style={{width: 200}}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required/>

                 <label  style={{color: "black", fontFamily: "Times New Roman"}}>Password:</label>
                    <input style={{width: 200 }}
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required/>

                <label  style={{color: "black", fontFamily: "Times New Roman"}}>Corporate:</label>
                <div style= {{width: "18em"}}>
                        <select value={corporate}  onChange={(e)=>setCorporate(e.target.value)}>
                            {/* <option value="noType">Choose a type </option> */}
                            <option value="bahamas">Bahamas</option>
                            <option value="guc">GUC</option>
                        </select>
                    </div>

                    <br/>
                    <br/>

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
           {/* {error && <div className="error">{error}</div>} */}
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

export default CorporateTraineeForm