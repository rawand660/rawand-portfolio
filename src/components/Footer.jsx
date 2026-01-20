function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p>© {currentYear} Rawand Hoshyar</p>
          <div className="footer-links">
            <a 
              href="https://instagram.com/rawand.iterations" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a href="mailto:rawandgardi6@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
