function Contact() {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <div className="contact-content fade-in">
            <h1 style={{ marginBottom: 'var(--space-sm)' }}>Contact</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)' }}>
              For inquiries about architectural work or collaborations, please get in touch.
            </p>
            
            <div className="contact-links">
              <a 
                href="mailto:rawand.h.design@gmail.com" 
                className="contact-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                rawand.h.design@gmail.com
              </a>
              
              <a 
                href="https://instagram.com/rawand.iterations" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                @rawand.iterations
              </a>
            </div>
            
            <div style={{ marginTop: 'var(--space-xl)' }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Location</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Based in London, UK
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
