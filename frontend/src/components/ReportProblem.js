import { useState } from "react"

const ReportProblem = () => {
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [type, setType] = useState('')
    
    const handleSubmit = async(e) => {
       // e.preventDefault()

        const NewReport = {subject, body, type}
        const response = await fetch(`/api/report/addReport?id=${id}`, {
            method: 'POST',
            body :JSON.stringify(NewUser),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await  response.json()
        console.log('The problem has been reported', json)
            setSubject('')
            setBody('')
            setType('')

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setSubject('')
            setBody('')
            setType('')
            console.log('The problem has been reported', json)
        }
    }

    return (
        <div className="create">
            <form onSubmit={handleSubmit}> 
                <h3> Add a new User </h3>
                    <label>User name:</label>
                        <input 
                        type="text"
                        onChange={(e) => setSubject(e.target.value)}
                        value={username}/>

                     <label>Password:</label>
                        <input 
                        type="text"
                        onChange={(e) => setBody(e.target.value)}
                        value={password}/>

                     <button> Report </button> 
            </form>
        </div>
    )
}
export default ReportProblem;