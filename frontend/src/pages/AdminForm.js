import { useState } from "react"
import {useNavigate} from "react-router";

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
     <div style={header}>Add a new Admin</div>
     <br/>
     <br/>
     <div>
            <form className="create" onSubmit={handleSubmit} style={{color: "#000000"}}>
                {/* , textAlign: "center", left: "100px"}}>  */}
            
         
                    <label>User name: </label>
                   
                        <input 
                        type="text"
                        style={{width: 200}}
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required/>
                        

                     <label>Password: </label>
                    
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
        </div>
       
    )
}
export default AdminForm