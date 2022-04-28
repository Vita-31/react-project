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
                        <a href="/#" className="navLink">Main Page</a>
                    </li>
                    <li className="navItem">
                        <a href="/#" className="navLink">Main Page</a>
                    </li>
                    <li className="navItem">
                        <a href="/#" className="navLink">Main Page</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
