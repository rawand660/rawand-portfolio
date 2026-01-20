import { useParams, Link } from 'react-router-dom'
import { projects } from './Work'

// Extended project data with full descriptions
const projectDetails = {
  'slipway-public-house': {
    fullDescription: `This project re-uses an old warehouse in the north of Urban Faversham, an old town with a rich history of boat making. The program proposes to reimagine the space as a public house where the public is taught of the traditional methods of boat making along with an annual ceremony for a gathering to celebrate a completion of a boat.

The design retains all of the existing structure of the warehouse while adding new steel trusses to strengthen the roof to support the weight of the rooftop seating. The addition of the tower to access the rooftop and the dock to allow for accessible access for the annual ceremony.`,
    images: [
      '/images/projects/slipway-1',
      '/images/projects/slipway-2',
      '/images/projects/slipway-3',
      '/images/projects/slipway-4',
      '/images/projects/slipway-5',
    ]
  },
  'separation-for-the-actor': {
    fullDescription: `This project, based in London, explores how theatres could create spaces of separation and distancing for actors with social anxiety, particularly children, to allow for a stepping stone into the world of theatre.

By using Aldo Rossi's Teatro del Mondo as the key precedent, three methods of separation explore different ways of creating a space for actors to hone their craft without the pressures of gazing eyes: The Inhabited Framework, The Subterranean Wells, and The Infiltrated Voids.`,
    images: [
      '/images/projects/seperation-1',
      '/images/projects/seperation-2',
      '/images/projects/seperation-3',
      '/images/projects/seperation-4',
      '/images/projects/seperation-5',
    ]
  },
  'edens-workshop': {
    fullDescription: `Situated on Regent's Canal in King's Cross, this project proposes a workshop and seedbank for the local residents of the site. The program consists of a workshop on the upper floor for seeds to be processed and dried to then be stored in the climate controlled lower storage facilities which are cooled by submerging into the ground.`,
    images: [
      '/images/projects/eden-1',
      '/images/projects/eden-2',
      '/images/projects/eden-3',
      '/images/projects/eden-4',
      '/images/projects/eden-5',
    ]
  },
  'between-currents': {
    fullDescription: `This pavilion is situated in the heart of Shadwell Basin in southeast London. Resting atop the stairs of a small park facing the water, the project acts as a threshold between the two spaces meant to bring a new aesthetic to the site.`,
    images: [
      '/images/projects/currents-1',
      '/images/projects/currents-2',
      '/images/projects/currents-3',
      '/images/projects/currents-4',
      '/images/projects/currents-5',
    ]
  }
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const details = projectDetails[slug]
  
  if (!project) {
    return (
      <div className="page">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/work" className="btn mt-md">Back to Work</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page project-detail">
      <div className="container">
        <Link to="/work" className="back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Work
        </Link>
        
        <div className="project-header fade-in">
          <h1>{project.title}</h1>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px' }}>
            {project.description}
          </p>
          
          <div className="project-details">
            <div>
              <strong>Location</strong><br />
              {project.location}
            </div>
            <div>
              <strong>Year</strong><br />
              {project.year}
            </div>
            <div>
              <strong>Type</strong><br />
              {project.type}
            </div>
            <div>
              <strong>Area</strong><br />
              {project.area}
            </div>
          </div>
        </div>
        
        {details && (
          <>
            <div style={{ marginTop: 'var(--space-lg)', maxWidth: '800px' }}>
              {details.fullDescription.split('\n\n').map((paragraph, i) => (
                <p key={i} style={{ 
                  color: 'var(--color-text-muted)', 
                  marginBottom: 'var(--space-md)' 
                }}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="project-gallery">
              {details.images.map((imgBase, i) => (
                <img 
                  key={i}
                  src={`${imgBase}.png`}
                  alt={`${project.title} - Image ${i + 1}`}
                  onError={(e) => {
                    // Try JPG if PNG fails
                    if (e.target.src.endsWith('.png')) {
                      e.target.src = `${imgBase}.jpg`
                    } else {
                      // Both failed, show placeholder
                      e.target.style.background = 'var(--color-bg-alt)'
                      e.target.style.minHeight = '300px'
                    }
                  }}
                />
              ))}
            </div>
          </>
        )}
        
        <div style={{ marginTop: 'var(--space-xl)' }}>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-md)' }}>
            Project images coming soon. In the meantime, view the full project in the PDF portfolio.
          </p>
          <Link to="/contact" className="btn">
            Request Full Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
