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
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const newUser = {username, password, corporate, firstName, lastName, email}
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
            setEmail('')
            console.log('New corporate trainee was added', json)
        }
    }


    return (
        <div>
             <div>
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
     </div>
     <hr/> 
     <br/> 
     <div style={header}>Add a new Corporate Trainee</div>
     <br/>
     <br/>
       <div>
        <form className="create" onSubmit={handleSubmit}> 

                 <label>User name:</label>
                    <input style={{width: 200 }}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required/>

                <label>First Name:</label>
                    <input style={{width: 200}}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required/>

                 <label>Last Name:</label>
                    <input style={{width: 200}}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required/>

                <label>Email:</label>
                    <input style={{width: 200 }}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required/>

                 <label>Password:</label>
                    <input style={{width: 200 }}
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required/>

                <label>Corporate:</label>
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
        </div>

    )
}

export default CorporateTraineeForm