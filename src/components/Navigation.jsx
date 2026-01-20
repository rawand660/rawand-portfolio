import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
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
            <Link 
              to="/work" 
              className={isActive('/work') ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              to="/shop" 
              className={isActive('/shop') ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
