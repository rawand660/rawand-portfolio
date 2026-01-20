import { Link } from 'react-router-dom'

const projects = [
  {
    slug: 'slipway-public-house',
    title: 'The Slipway Public House',
    location: 'Faversham, Kent, UK',
    year: '2025',
    type: 'Re-use',
    area: '1200 sq.m',
    description: 'A public house celebrating the boat building heritage of Faversham.',
    image: '/images/projects/slipway-hero'
  },
  {
    slug: 'separation-for-the-actor',
    title: 'Separation for the Actor',
    location: 'Southwark, London, UK',
    year: '2026',
    type: 'Re-use',
    area: '2400 sq.m',
    description: 'Exploring spaces of separation for actors with social anxiety in theatre design.',
    image: '/images/projects/seperation-hero'
  },
  {
    slug: 'edens-workshop',
    title: "Eden's Workshop",
    location: "King's Cross, London, UK",
    year: '2024',
    type: 'New Build',
    area: '70 sq.m',
    description: 'A seed storage facility and workshop for the residents of Regent\'s Canal.',
    image: '/images/projects/eden-hero'
  },
  {
    slug: 'between-currents',
    title: 'Between Currents',
    location: 'Shadwell, London, UK',
    year: '2023',
    type: 'Pavilion',
    area: '60 sq.m',
    description: 'A pavilion situated in Shadwell Basin as a threshold between spaces.',
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
            <p className="section-subtitle">
              Selected architectural projects from the University of East London, 
              ranging from foundation year through third year.
            </p>
          </div>
          
          <div className="project-grid">
            {projects.map((project, index) => (
              <Link 
                key={project.slug} 
                to={`/work/${project.slug}`} 
                className="project-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <img 
                    src={`${project.image}.png`}
                    alt={project.title}
                    onError={(e) => {
                      if (e.target.src.endsWith('.png')) {
                        e.target.src = `${project.image}.jpg`
                      } else {
                        e.target.parentElement.style.background = '#e8e7e5'
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
export { projects }
