import { useState } from "react"
import {useNavigate} from "react-router";

const InstructorForm = () => {
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
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [error, setError] = useState(null)
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const newUser = {username, password, email, firstName, lastName}
        const response = await fetch('http://localhost:5000/api/instructor/createInstructor', {
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
            setEmail('')
            setFirstName('')
            setLastName('')
            setError(null)
            console.log('New instructor was added', json)
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
     <div style={header}>Add a new Instructor</div>
     <br/>
     <br/>
     <div>
        <form className="create" onSubmit={handleSubmit}> 
            

            <label>Username:</label>
            <input style={{width: 200}}
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
            <input style={{width: 200}}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required/>

            <label>Password:</label>
            <input style={{width: 200}}
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required/>
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


export default InstructorForm