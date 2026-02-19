import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Rawand Hoshyar</p>
          <div className="footer-links">
            <a href="mailto:rawand.h.design@gmail.com">Email</a>
            <a 
              href="https://instagram.com/rawand.iterations" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
