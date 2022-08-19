import { NavLink, useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()

    return (
        <nav className="nav">
            <div className="nav__container">
                <h1 className="nav__logo">Member Application</h1>
                <div className="nav__links">
                    <NavLink to="/" className="nav__link">
                        Home
                    </NavLink>
                    <NavLink to="/new" className="nav__link">
                        New Member
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
