import { Link } from 'react-router-dom'

export const projects = [
  {
    slug: 'slipway-public-house',
    title: 'The Slipway Public House',
    description: 'Adaptive reuse of a historic warehouse into a public house celebrating traditional boat-making craft.',
    location: 'Faversham, UK',
    year: '2025',
    type: 'Cultural / Hospitality',
    area: '850 m²',
    image: '/images/projects/slipway-hero'
  },
  {
    slug: 'umbaukunst',
    title: 'Umbaukunst: Architecture, as Found',
    description: 'A technical theatre school and public theatre formed through the adaptive reuse of two contrasting Southbank buildings — the Bargehouse and Barge Crescent.',
    location: 'South Bank, London',
    year: '2026',
    type: 'Theatre School / Cultural',
    area: '3,200 m²',
    image: '/images/projects/seperation-hero'
  },
  {
    slug: 'edens-workshop',
    title: "Eden's Workshop",
    description: 'A workshop and seedbank for local residents, integrating climate-controlled storage with community space.',
    location: "King's Cross, London",
    year: '2024',
    type: 'Community / Agricultural',
    area: '320 m²',
    image: '/images/projects/eden-hero'
  },
  {
    slug: 'between-currents',
    title: 'Between Currents',
    description: 'A threshold pavilion at Shadwell Basin creating a dialogue between water and urban park.',
    location: 'Shadwell, London',
    year: '2023',
    type: 'Pavilion',
    area: '45 m²',
    image: '/images/projects/currents-hero'
  }
]

function Work() {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <div className="section-header fade-in">
            <h1 className="section-title">Work</h1>
            <p className="section-subtitle">Selected architectural projects from 2023–2026</p>
          </div>
          
          <div className="project-grid fade-in">
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
