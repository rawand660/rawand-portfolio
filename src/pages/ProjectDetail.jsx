import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from './Work'

// Extended project data with full descriptions
const projectDetails = {
  'slipway-public-house': {
    fullDescription: `This project re-uses an old warehouse in the north of Urban Faversham, an old town with a rich history of boat making. The program proposes to reimagine the space as a public house where the public is taught of the traditional methods of boat making along with an annual ceremony for a gathering to celebrate a completion of a boat.

The design retains all of the existing structure of the warehouse while adding new steel trusses to strengthen the roof to support the weight of the rooftop seating. The addition of the tower to access the rooftop and the dock to allow for accessible access for the annual ceremony.`,
    heroImage: '/images/projects/slipway-hero',
    images: [
      '/images/projects/slipway-1',
      '/images/projects/slipway-2',
      '/images/projects/slipway-3',
      '/images/projects/slipway-4',
      '/images/projects/slipway-5',
      '/images/projects/slipway-6',
      '/images/projects/slipway-7',
      '/images/projects/slipway-8',
      '/images/projects/slipway-9',
      '/images/projects/slipway-10',
    ]
  },
  'umbaukunst': {
    fullDescription: `Umbaukunst is a compound of Umbau (transformation) and Baukunst (building-art). It suggests that the act of adaptive reuse can treat the existing as a tool rather than a constraint — transforming in a way that both respects and exemplifies what is already there, so the new architecture works in tandem with the site rather than clashing.

Situated on London's South Bank next to the OXO Tower, the project proposes a technical theatre school for younger students drawn to the field but underserved by the few existing technical routes, which select for those who already know their aptitude. The school connects to a theatre and exhibition gallery that gives students a space to put the skills they acquire on display. It reuses Barge Crescent, a recently completed office building by Henley Halebrown, which connects to the theatre and gallery situated within the Bargehouse — an old masonry and steel warehouse constructed around the 1930s as part of Stamford Wharf.

The design responds differently to each building. Given that Barge Crescent is new, extra care is taken to preserve the existing structure and facade. The school operates as a cityscape where learning is experienced through the architecture: floor cuts create glimpses between levels, and timber rooms sit within the existing frame as spaces to be discovered rather than assigned. In the Bargehouse, the architecture itself is the performance — put on display via the facade, where the interplay of exposed brick, render, and steel hints at the internal activities from the street. The Barge Crescent is found by its students. The Bargehouse is found as it stands.`,
    heroImage: '/images/projects/seperation-hero',
    images: [
      '/images/projects/seperation-1',
      '/images/projects/seperation-2',
      '/images/projects/seperation-3',
      '/images/projects/seperation-4',
      '/images/projects/seperation-5',
      '/images/projects/seperation-6',
      '/images/projects/seperation-7',
      '/images/projects/seperation-8',
      '/images/projects/seperation-9',
      '/images/projects/seperation-10',
    ]
  },
  'edens-workshop': {
    fullDescription: `Situated on Regent's Canal in King's Cross, this project proposes a workshop and seedbank for the local residents of the site. The program consists of a workshop on the upper floor for seeds to be processed and dried to then be stored in the climate controlled lower storage facilities which are cooled by submerging into the ground.`,
    heroImage: '/images/projects/eden-hero',
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
    heroImage: '/images/projects/currents-hero',
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
  const [lightboxImage, setLightboxImage] = useState(null)
  
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

  const openLightbox = (imgSrc) => {
    setLightboxImage(imgSrc)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    document.body.style.overflow = 'auto'
  }

  const ImageWithFallback = ({ baseSrc, alt, onClick, className }) => {
    const [src, setSrc] = useState(`${baseSrc}.png`)
    const [finalSrc, setFinalSrc] = useState(null)
    const [hidden, setHidden] = useState(false)

    const handleError = () => {
      if (src.endsWith('.png')) {
        setSrc(`${baseSrc}.jpg`)
      } else {
        setHidden(true)
      }
    }

    const handleLoad = () => {
      setFinalSrc(src)
    }

    if (hidden) return null

    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => onClick && finalSrc && onClick(finalSrc)}
        onError={handleError}
        onLoad={handleLoad}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      />
    )
  }

  return (
    <div className="page project-detail">
      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="lightbox"
          onClick={closeLightbox}
        >
          <button className="lightbox-close" onClick={closeLightbox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <img src={lightboxImage} alt="Full size" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <div className="container">
        <Link to="/work" className="back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Work
        </Link>
        
        {/* Hero Image */}
        {details && (
          <div className="project-hero fade-in">
            <ImageWithFallback 
              baseSrc={details.heroImage}
              alt={project.title}
              onClick={openLightbox}
              className="project-hero-image"
            />
          </div>
        )}
        
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
                <ImageWithFallback 
                  key={i}
                  baseSrc={imgBase}
                  alt={`${project.title} - Image ${i + 1}`}
                  onClick={openLightbox}
                />
              ))}
            </div>
          </>
        )}
        
        <div style={{ marginTop: 'var(--space-xl)' }}>
          <Link to="/contact" className="btn">
            Request Full Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
