function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-colophon">
            <p className="footer-mark">Rawand Hoshyar</p>
            <p className="footer-copy">© {new Date().getFullYear()} · All work shown is academic unless noted.</p>
          </div>
          <div className="footer-links">
            <a href="mailto:rawand.h.design@gmail.com">Email</a>
            <a
              href="https://instagram.com/rawand.iterations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
