import { Link } from 'react-router-dom'

const featured = [
  {
    slug: 'umbaukunst',
    title: 'Umbaukunst: Architecture, as Found',
    image: '/images/projects/seperation-hero',
    meta: 'South Bank, London · 2026',
    note: 'A theatre school and gallery wrought out of the Bargehouse and Barge Crescent.'
  },
  {
    slug: 'anchored-in-time',
    title: 'Anchored in Time',
    image: '/images/projects/door-hero',
    meta: 'Brooking Collection · 2025',
    note: 'An 1864 timber door translated through charcoal, plaster and timber.'
  },
  {
    slug: 'slipway-public-house',
    title: 'The Slipway Public House',
    image: '/images/projects/slipway-hero',
    meta: 'Faversham, UK · 2025',
    note: 'Bringing the sideways ship launch back to a town that lost it in 1970.'
  }
]

function Home() {
  return (
    <div className="page">
      <div className="container">
        <section className="hero">
          <div className="hero-content fade-in">
            <p className="hero-subtitle">Rawand Hoshyar, Architecture, London</p>
            <h1>
              Appreciating what is<br />already&nbsp;there.
            </h1>
            <p className="hero-description">
              I am a Part 1 Architectural Assistant. I enjoy working with a plethora of
              media such as charcoal, plaster, ink, timber, and digital. A lot of my projects
              focus on adaptive reuse; I enjoy working with the existing rather than treating
              it as a constraint.
            </p>
            <div className="hero-actions">
              <Link to="/work" className="btn btn-primary">Selected work</Link>
              <Link to="/polaroids" className="btn">Polaroids</Link>
              <Link to="/writings" className="btn">Writing</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <p className="section-eyebrow">Three to start with</p>
            <h2 className="section-title">Selected Work</h2>
            <p className="section-subtitle">
              A theatre school, a door, a public house. Pick where to begin.
            </p>
          </div>

          <div className="featured-grid">
            {featured.map((p, i) => (
              <Link key={p.slug} to={`/work/${p.slug}`} className="featured-card">
                <span className="featured-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="project-image">
                  <img
                    src={`${p.image}.png`}
                    alt={p.title}
                    onError={(e) => {
                      if (e.target.src.endsWith('.png')) {
                        e.target.src = `${p.image}.jpg`
                      } else {
                        e.target.style.display = 'none'
                      }
                    }}
                  />
                </div>
                <div className="project-info">
                  <h3>{p.title}</h3>
                  <p className="project-meta">{p.meta}</p>
                  <p className="featured-note">{p.note}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-lg">
            <Link to="/work" className="btn">All seven projects</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
