import { Link } from 'react-router-dom'
// import './NavBar.css';
const Navbar = () => {


    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Welcome Admin!</h1>
                </Link>

            </div>
        </header>
    )
}

export default Navbar