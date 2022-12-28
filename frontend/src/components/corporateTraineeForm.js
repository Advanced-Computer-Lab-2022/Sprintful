import { useState } from "react"

const CorporateTraineeForm = () => {
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
        <form className="create" onSubmit={handleSubmit}> 
            <h3> Add a new Corporate Trainee </h3>
                 <label>User name:</label>
                    <input style={{width: 200 }}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}/>

                <label>First Name:</label>
                    <input style={{width: 200}}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}/>

                 <label>Last Name:</label>
                    <input style={{width: 200}}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}/>

                 <label>Password:</label>
                    <input style={{width: 200 }}
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}/>

                <label>Corporate:</label>
                <div style= {{width: "18em"}}>
                        <select value={corporate}  onChange={(e)=>setCorporate(e.target.value)}>
                            {/* <option value="noType">Choose a type </option> */}
                            <option value="bahamas">Bahamas</option>
                            <option value="guc">GUC</option>
                        </select>
                    </div>

                <button> Create </button> 
           {/* {error && <div className="error">{error}</div>} */}
        </form>

    )
}

export default CorporateTraineeForm