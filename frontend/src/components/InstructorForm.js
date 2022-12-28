import { useState } from "react"

const InstructorForm = () => {
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
        <form className="create" onSubmit={handleSubmit}> 
            <h3> Add a new Instructor </h3>

            <label>Username:</label>
            <input style={{width: 200}}
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


             <label>Email:</label>
            <input style={{width: 200}}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>

            <label>Password:</label>
            <input style={{width: 200}}
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}/>

           <button> Create </button> 
           {/* {error && <div className="error">{error}</div>} */}
        </form>

    )
}


export default InstructorForm