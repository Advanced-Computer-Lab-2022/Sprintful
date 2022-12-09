import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const AddQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('')
    const [choice1, setChoice1] = useState('')
    const [choice2, setChoice2] = useState('')
    const [choice3, setChoice3] = useState('')
    const [choice4, setChoice4] = useState('')

    const handleSubmit = async (e) => {
       // e.preventDefault()
       const choices = [choice1, choice2, choice3, choice4]

        const question = { 
            questionTitle,
            choices,
            
        }
    }

    return (
        <form>
        <div className='questions'>
        <h2 className='text-light'>Simple Question 1</h2>
        <label>Question title</label>
        <input 
            type="text"
            onChange={(e)=>setQuestionTitle(e.target.value)}
            value={questionTitle}
        />

        <label> Choice 1</label>
        <input
            type="text"
            onChange={(e)=>setChoice1(e.target.value)}
        />

        <label> Choice 2</label>
        <input
            type="text"
            onChange={(e)=>setChoice2(e.target.value)}
        />

        <label> Choice 3</label>
        <input
            type="text"
            onChange={(e)=>setChoice3(e.target.value)}
        />

        <label> Choice 4</label>
        <input
            type="text"
            onChange={(e)=>setChoice4(e.target.value)}
        />
    </div>
    <button onClick={handleSubmit}>Next</button>

    <div className='start'>
        <Link className='btn' to={'instructorpage'}>Finish</Link>
    </div>
    </form>
    )
}

export default AddQuestion
