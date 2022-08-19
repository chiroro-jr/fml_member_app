import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

function NavBar() {
    return (
        <nav className="nav">
            <div className="nav__blur-outer">
                <div className="nav__blur-inner">
                    <div className="nav__container">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <div className="nav__links">
                            <NavLink to="/" className="nav__link">
                                Home
                            </NavLink>
                            <NavLink to="/new" className="nav__link">
                                Add Member
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
