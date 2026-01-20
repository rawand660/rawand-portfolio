function About() {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <div className="about-content fade-in">
            <div className="about-text">
              <h1 style={{ marginBottom: 'var(--space-md)' }}>About</h1>
              
              <p>
                I'm an architecture student at the University of East London, 
                currently in my third year. My work explores themes of heritage, 
                craft, and the relationship between buildings and their landscapes.
              </p>
              
              <p>
                The projects in this portfolio range from adaptive reuse—breathing 
                new life into existing structures—to new builds and pavilions. 
                Each project attempts to understand and respond to its context, 
                whether that's the boat-building heritage of Faversham or the 
                canal communities of King's Cross.
              </p>
              
              <p>
                Alongside my architectural work, I photograph on instant film. 
                The imperfections and unpredictability of polaroids mirror 
                something I find valuable in architecture: the beauty of the 
                handmade, the traces of process, the acceptance of happy accidents.
              </p>
              
              <p>
                I work across media—pencil drawings, physical models, digital 
                fabrication—believing that different tools reveal different 
                qualities in a design. The hand drawing discovers something 
                the computer cannot, and vice versa.
              </p>
              
              <div style={{ marginTop: 'var(--space-lg)' }}>
                <h3 style={{ marginBottom: 'var(--space-sm)' }}>Education</h3>
                <p>BA (Hons) Architecture<br />University of East London<br />2022 – Present</p>
              </div>
              
              <div style={{ marginTop: 'var(--space-md)' }}>
                <h3 style={{ marginBottom: 'var(--space-sm)' }}>Location</h3>
                <p>London, UK<br />Erbil, Kurdistan Region, Iraq</p>
              </div>
            </div>
            
            <div className="about-image">
              {/* You can add a portrait here later */}
              <div style={{ 
                aspectRatio: '3/4', 
                background: 'var(--color-bg-alt)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-muted)',
                fontSize: '0.875rem'
              }}>
                Portrait
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
