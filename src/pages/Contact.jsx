function Contact() {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <div className="contact-content fade-in">
            <h1 style={{ marginBottom: 'var(--space-sm)' }}>Contact</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-lg)' }}>
              For inquiries about architectural work, collaborations, or purchasing 
              polaroids, please get in touch.
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
              
              <a 
                href="tel:+4407496425444" 
                className="contact-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +44 7496 425444
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
