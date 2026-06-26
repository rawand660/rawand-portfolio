import { Link } from 'react-router-dom'

export const projects = [
  {
    slug: 'umbaukunst',
    title: 'Umbaukunst: Architecture, as Found',
    description: 'A technical theatre school and public theatre formed through the adaptive reuse of two contrasting South Bank buildings, the Bargehouse and Barge Crescent.',
    location: 'South Bank, London',
    year: '2026',
    type: 'Theatre School / Cultural',
    area: '3,200 m²',
    image: '/images/projects/seperation-hero',
    category: 'Building'
  },
  {
    slug: 'slipway-public-house',
    title: 'The Slipway Public House',
    description: 'Adaptive reuse of a historic warehouse into a public house celebrating traditional boat-making craft.',
    location: 'Faversham, UK',
    year: '2025',
    type: 'Cultural / Hospitality',
    area: '850 m²',
    image: '/images/projects/slipway-hero',
    category: 'Building'
  },
  {
    slug: 'anchored-in-time',
    title: 'Anchored in Time',
    description: 'A precedent study of an 1864 timber door from the Brooking Collection, translated through charcoal, plaster and timber.',
    location: 'Brooking Collection · Studio',
    year: '2025',
    type: 'Precedent Study · Model',
    area: '1:5 model',
    image: '/images/projects/door-hero',
    category: 'Study'
  },
  {
    slug: 'holistic-sustainability',
    title: 'Holistic Sustainability',
    description: 'A technical case study of 1718 Verbiest by AgwA, reading an adaptive reuse project through structure, environment and material lifecycle.',
    location: 'Sint-Jans-Molenbeek, Brussels',
    year: '2025',
    type: 'Technical Case Study',
    area: '1:5 detail & model',
    image: '/images/projects/holistic-hero',
    category: 'Study'
  },
  {
    slug: 'edens-workshop',
    title: "Eden's Workshop",
    description: 'A workshop and seedbank for local residents, integrating climate-controlled storage with community space.',
    location: "King's Cross, London",
    year: '2024',
    type: 'Community / Agricultural',
    area: '320 m²',
    image: '/images/projects/eden-hero',
    category: 'Building'
  },
  {
    slug: 'art-of-trace',
    title: 'The Art of Trace',
    description: 'A two-person drawing device installed on a graffiti wall at Regent’s Canal, a Year 1 collaboration that turned a community ritual into a designed object.',
    location: 'De Beauvoir Town, London',
    year: '2023',
    type: 'Installation · Collaboration',
    area: '1:1 device',
    image: '/images/projects/trace-hero',
    category: 'Installation'
  },
  {
    slug: 'between-currents',
    title: 'Between Currents',
    description: 'A threshold pavilion at Shadwell Basin creating a dialogue between water and urban park.',
    location: 'Shadwell, London',
    year: '2023',
    type: 'Pavilion',
    area: '45 m²',
    image: '/images/projects/currents-hero',
    category: 'Building'
  }
]

function Work() {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <div className="section-header fade-in">
            <p className="section-eyebrow">Index, 2023 – 2026</p>
            <h1 className="section-title">Work</h1>
            <p className="section-subtitle">
              Seven projects across buildings, studies and an installation. Listed newest first.
            </p>
          </div>

          <ol className="project-index fade-in">
            {projects.map((project, i) => (
              <li key={project.slug} className="project-row">
                <Link to={`/work/${project.slug}`} className="project-row-link">
                  <span className="project-row-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="project-row-title">
                    <span className="project-row-name">{project.title}</span>
                    <span className="project-row-cat">{project.category}</span>
                  </span>
                  <span className="project-row-meta">{project.location}</span>
                  <span className="project-row-year">{project.year}</span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="project-grid fade-in" style={{ marginTop: 'var(--space-xl)' }}>
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="project-card"
              >
                <div className="project-image">
                  <img
                    src={`${project.image}.png`}
                    alt={project.title}
                    onError={(e) => {
                      if (e.target.src.endsWith('.png')) {
                        e.target.src = `${project.image}.jpg`
                      } else {
                        e.target.style.display = 'none'
                      }
                    }}
                  />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-meta">{project.location} · {project.year}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Work
