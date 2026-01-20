function About() {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <div className="about-content fade-in">
            <div className="about-text">
              <h1 style={{ marginBottom: 'var(--space-md)' }}>About</h1>
              
              <p>
                I'm an architecture student in London, currently in my third year. 
                My work explores themes of heritage, craft, and the relationship 
                between buildings and their landscapes.
              </p>
              
              <p>
                The projects in this portfolio range from adaptive reuse, breathing 
                new life into existing structures, to new builds and pavilions. 
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
                I work across media, pencil drawings, physical models, digital 
                fabrication, believing that different tools reveal different 
                qualities in a design. The hand drawing discovers something 
                the computer cannot, and vice versa.
              </p>
              
              <div style={{ marginTop: 'var(--space-lg)' }}>
                <h3 style={{ marginBottom: 'var(--space-sm)' }}>Education</h3>
                <p>BSc (Hons) Architecture (ARB/RIBA Part 1)<br />University of East London<br />2022 - Present</p>
              </div>
              
              <div style={{ marginTop: 'var(--space-md)' }}>
                <h3 style={{ marginBottom: 'var(--space-sm)' }}>Location</h3>
                <p>Based in London, UK</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
