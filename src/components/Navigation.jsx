import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path ? 'active' : ''
  
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Rawand Hoshyar
        </Link>
        
        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/work" className={isActive('/work')} onClick={closeMenu}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/polaroids" className={isActive('/polaroids')} onClick={closeMenu}>
              Polaroids
            </Link>
          </li>
          <li>
            <Link to="/writings" className={isActive('/writings')} onClick={closeMenu}>
              Writings
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about')} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
