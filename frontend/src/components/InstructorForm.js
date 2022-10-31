import { useState } from "react"

const InstructorForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    
    const handleSubmit = async(e) => {
        e.preventdefault()

        const newUser = {username, password}
        const response = await fetch('/api/admin/createInstructor', {
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
            setError(null)
            console.log('New instructor was added', json)
        }
    }


    return (
        <form className="create" onSubmit={handleSubmit}> 
            <h3> Add a new User </h3>

            <label>User name:</label>
            <input 
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}/>

             <label>Password:</label>
            <input 
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>

           <button> Create </button> 
           {error && <div className="error">{error}</div>}
        </form>

    )
}


export default InstructorForm