import { GrUserAdmin } from 'react-icons/gr' 
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to='/'>Dashboard</Link>
            </div>
            <ul>
                <li>
                    <Link to='/createadmin'>
                        <GrUserAdmin /> Create Admin
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header