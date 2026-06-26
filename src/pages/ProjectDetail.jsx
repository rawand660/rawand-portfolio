import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from './Work'

// Extended project data with full descriptions
const projectDetails = {
  'slipway-public-house': {
    fullDescription: `This project reuses an old warehouse in the north of Faversham, an old town with a rich history of boat making. The programme proposes to reimagine the space as a public house where the public is taught the traditional methods of boat making, along with an annual ceremony to celebrate the completion of a boat.

The design retains all of the existing structure of the warehouse while adding new steel trusses to strengthen the roof and support the weight of the rooftop seating. A new tower provides access to the rooftop, and a dock allows accessible entry for the annual ceremony.`,
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
    fullDescription: `Umbaukunst is a compound of Umbau (transformation) and Baukunst (building-art). It suggests that the act of adaptive reuse can treat the existing as a tool rather than a constraint, transforming in a way that both respects and exemplifies what is already there, so the new architecture works in tandem with the site rather than clashing.

Situated on London's South Bank next to the OXO Tower, the project proposes a technical theatre school for younger students drawn to the field but underserved by the few existing technical routes, which select for those who already know their aptitude. The school connects to a theatre and exhibition gallery that gives students a space to put the skills they acquire on display. It reuses Barge Crescent, a recently completed office building by Henley Halebrown, which connects to the theatre and gallery situated within the Bargehouse, an old masonry and steel warehouse constructed around the 1930s as part of Stamford Wharf.

The design responds differently to each building. Given that Barge Crescent is new, extra care is taken to preserve the existing structure and facade. The school operates as a cityscape where learning is experienced through the architecture: floor cuts create glimpses between levels, and timber rooms sit within the existing frame as spaces to be discovered rather than assigned. In the Bargehouse, the architecture itself is the performance, put on display via the facade, where the interplay of exposed brick, render, and steel hints at the internal activities from the street. The Barge Crescent is found by its students. The Bargehouse is found as it stands.`,
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
    fullDescription: `Situated on Regent's Canal in King's Cross, this project proposes a workshop and seedbank for the local residents of the site. The programme consists of a workshop on the upper floor where seeds are processed and dried, to then be stored in the climate-controlled lower storage facilities, which are cooled by submerging into the ground.`,
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
  },
  'anchored-in-time': {
    fullDescription: `The narrative of this project begins with a single object: a dense and grand wooden door from 1864, held in the Brooking Collection, the world's largest archive of architectural details.

The door wears two faces. The side facing the elements is dark timber strips backing two metal barricades that encompass it. The side facing the interior is a white-finished timber with a cross pattern, formed by alternating groove cuts between the upper and lower planks. The locking mechanism relies on a large timber piece slotting through metal hooks; the cast-iron handle is forged as a spiral unto itself.

Charcoal drawings imagine the life of the door before it was archived: a menacing, dark object set in castle-like environments, stone exteriors on a high mound, cold interiors. From those drawings a plaster and timber model was made, taking Walter Pichler's drawings as a precedent for hinge and threshold. The plaster floor carries stone carvings to anchor the door's previous life into the model itself.`,
    heroImage: '/images/projects/door-hero',
    images: [
      '/images/projects/door-1',
      '/images/projects/door-2',
      '/images/projects/door-3',
      '/images/projects/door-4',
      '/images/projects/door-5',
      '/images/projects/door-6',
      '/images/projects/door-7',
    ]
  },
  'art-of-trace': {
    fullDescription: `A Year 1 collaborative project on the Regent's Canal in De Beauvoir Town. The site's identity was anchored by an unbroken layer of graffiti along its brick walls, a community language written and overwritten every week. The brief asked us to design an encounter with that community; we answered with a device for two people to draw together.

Early iterations leaned toward The Singing Bridge, transferring the reverb of cyclists' bells from one side of the canal underpass to the other. It was scrapped as too unrealistic. We returned to the wall, to the graffiti, and to the idea of trace.

The device is built around mimicry. One handle leads, the other follows. Extensions branch off the main body so smaller members swing chaotically as the device moves, giving the trace its own life. The handles were iterated until they carried the void of two hands, ergonomic but always two-handed, so the object refuses to be used alone.

The 1:1 mock-up was bolted to a plank and clamped onto the graffiti wall from above. The wall fought back: bricks bulging in places, withered in others, compromising the canvas. That friction, the wall as imperfect collaborator, is what made the install feel honest.`,
    heroImage: '/images/projects/trace-hero',
    images: [
      '/images/projects/trace-1',
      '/images/projects/trace-2',
      '/images/projects/trace-3',
      '/images/projects/trace-4',
      '/images/projects/trace-5',
      '/images/projects/trace-6',
      '/images/projects/trace-7',
      '/images/projects/trace-8',
      '/images/projects/trace-9',
      '/images/projects/trace-10',
      '/images/projects/trace-11',
    ]
  },
  'holistic-sustainability': {
    fullDescription: `A technical case study of 1718 Verbiest, AgwA's 2020 conversion of an old warehouse in Sint-Jans-Molenbeek, Brussels, into an artist's studio with a family home above.

The study reads the project as a holistic position on sustainability rather than a checklist. All of the existing structure and foundation is reused; new CLT columns rest on the original concrete raft to strengthen it. The architects calculated that the embodied carbon of fully insulating every room would exceed the embodied carbon of artificially heating the interior, so insulation is applied selectively, in hempcrete, only where it pays back. Concrete and steel are virtually banned from the new work.

The drawings step through plans, sections, structural load distribution, environmental analysis, fire compartmentation under Belgian and UK regulations, and hempcrete sourcing, including a 1:5 detail that proposes two ways to mitigate the cold bridge present in the architects' existing detail.

The study sits alongside my own design work as the technical lens it deserves: the same problems (adaptive reuse, material reuse, climate) examined through someone else's resolution before being argued in my own.`,
    heroImage: '/images/projects/holistic-hero',
    images: [
      '/images/projects/holistic-1',
      '/images/projects/holistic-2',
      '/images/projects/holistic-3',
      '/images/projects/holistic-4',
      '/images/projects/holistic-5',
      '/images/projects/holistic-6',
      '/images/projects/holistic-7',
      '/images/projects/holistic-8',
      '/images/projects/holistic-9',
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
