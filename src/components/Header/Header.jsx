import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
        <div className="container header-container">
            <a href="/" className="logo">
                UserSystem
            </a>
            <nav>
                <ul className="nav">
                    <li className="navItem">
                        <NavLink to="/" className="navLink">Main Page</NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/create" className="navLink">Create User</NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/user" className="navLink">User Page</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
