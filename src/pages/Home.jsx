import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page">
      <div className="container">
        <section className="hero">
          <div className="hero-content fade-in">
            <p className="hero-subtitle">Architecture & Photography</p>
            <h1>Rawand Hoshyar</h1>
            <p className="hero-description">
              Architecture student at the University of East London, exploring the intersection 
              of heritage, craft, and contemporary design through drawings, models, and instant film photography.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/work" className="btn btn-primary">
                View Work
              </Link>
              <Link to="/shop" className="btn">
                Shop Polaroids
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Projects Preview */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Selected Work</h2>
            <p className="section-subtitle">Recent architectural projects</p>
          </div>
          
          <div className="project-grid">
            <Link to="/work/slipway-public-house" className="project-card">
              <div className="project-image">
                <img 
                  src="/images/projects/slipway-hero.png" 
                  alt="The Slipway Public House"
                  onError={(e) => {
                    if (e.target.src.endsWith('.png')) {
                      e.target.src = '/images/projects/slipway-hero.jpg'
                    } else {
                      e.target.style.display = 'none'
                    }
                  }}
                />
              </div>
              <div className="project-info">
                <h3>The Slipway Public House</h3>
                <p className="project-meta">Faversham, UK · 2025</p>
              </div>
            </Link>
            
            <Link to="/work/separation-for-the-actor" className="project-card">
              <div className="project-image">
                <img 
                  src="/images/projects/seperation-hero.png" 
                  alt="Separation for the Actor"
                  onError={(e) => {
                    if (e.target.src.endsWith('.png')) {
                      e.target.src = '/images/projects/seperation-hero.jpg'
                    } else {
                      e.target.style.display = 'none'
                    }
                  }}
                />
              </div>
              <div className="project-info">
                <h3>Separation for the Actor</h3>
                <p className="project-meta">Southwark, London · 2026</p>
              </div>
            </Link>
            
            <Link to="/work/edens-workshop" className="project-card">
              <div className="project-image">
                <img 
                  src="/images/projects/eden-hero.png" 
                  alt="Eden's Workshop"
                  onError={(e) => {
                    if (e.target.src.endsWith('.png')) {
                      e.target.src = '/images/projects/eden-hero.jpg'
                    } else {
                      e.target.style.display = 'none'
                    }
                  }}
                />
              </div>
              <div className="project-info">
                <h3>Eden's Workshop</h3>
                <p className="project-meta">King's Cross, London · 2024</p>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-lg">
            <Link to="/work" className="btn">
              View All Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
