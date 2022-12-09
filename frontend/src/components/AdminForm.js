import { useState } from "react"

const AdminForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    
    const handleSubmit = async(e) => {
       // e.preventdefault()

        const NewUser = {username, password}
        const response = await fetch('/api/admin/', {
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
        <div className="create">
            <form onSubmit={handleSubmit}> 
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
            </form>
        </div>
    )
}
export default AdminForm