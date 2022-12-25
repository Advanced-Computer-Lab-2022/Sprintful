import { useState } from "react"

const CorporateTraineeForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [corporate, setCorporate] = useState('')
    const [error, setError] = useState(null)
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const newUser = {username, password, corporate}
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
                 <label>Password:</label>
                    <input style={{width: 200 }}
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}/>
                <label>Corporate:</label>
                    <input style={{width: 200}}
                    type="text"
                    onChange={(e) => setCorporate(e.target.value)}
                    value={corporate}/>

                <button> Create </button> 
           {/* {error && <div className="error">{error}</div>} */}
        </form>

    )
}

export default CorporateTraineeForm