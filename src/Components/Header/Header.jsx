import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" >MyProducts</Link>
      </div>
    </nav>
  )
}

export default Header