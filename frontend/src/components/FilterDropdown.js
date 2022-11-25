import { useState } from "react"

function Dropdown(selected, setSelected) {
    const [isOpen, setIsOpen] = useState(false)
    const options = ["Course", "Instructor", "Corporate Trainee", "Admin"];
    //const toggle = () => setIsOpen(!isOpen)
    return (
        <div className= "dropdown">
            <div className= "dropdown-btn" onClick={e => setIsOpen(!isOpen)}>
                {selected}
                <span className="fas fa-caret-down"></span>
                </div>
                {isOpen && (
                    <div className="dropdown-content">
                        {options.map(option => (
                        <div onClick={e => {
                            setSelected(option)
                            setIsOpen(false)
                        }}
                        className="dropdown-item"> {option} </div>

                            ))} 
                    </div>
                )}                
        </div>
    )
}

export default Dropdown;