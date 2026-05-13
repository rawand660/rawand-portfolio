import { useState } from 'react'

// Polaroid data - just display info, no pricing
const polaroids = [
  {
    id: 1,
    title: 'Industrial Rings',
    image: '/images/polaroids/polaroid-1.png'
  },
  {
    id: 2,
    title: 'Quarry Edge',
    image: '/images/polaroids/polaroid-2.png'
  },
  {
    id: 3,
    title: 'Timber Frame',
    image: '/images/polaroids/polaroid-3.png'
  },
  {
    id: 4,
    title: 'Windmill & Ring',
    image: '/images/polaroids/polaroid-4.png'
  },
  {
    id: 5,
    title: 'Stone Cottage',
    image: '/images/polaroids/polaroid-5.png'
  },
  {
    id: 6,
    title: 'Gothic Windows',
    image: '/images/polaroids/polaroid-6.png'
  },
  {
    id: 7,
    title: 'River Valley',
    image: '/images/polaroids/polaroid-7.png'
  },
  {
    id: 8,
    title: 'Overgrown',
    image: '/images/polaroids/polaroid-8.png'
  },
  {
    id: 9,
    title: 'White Portico',
    image: '/images/polaroids/polaroid-9.jpg'
  },
  {
    id: 10,
    title: 'Tower in Fog',
    image: '/images/polaroids/polaroid-10.jpg'
  },
  {
    id: 11,
    title: 'Octagonal Pavilion',
    image: '/images/polaroids/polaroid-11.jpg'
  },
  {
    id: 12,
    title: 'Ivy',
    image: '/images/polaroids/polaroid-12.jpg'
  },
  {
    id: 13,
    title: 'Candlelit Colonnade',
    image: '/images/polaroids/polaroid-13.jpg'
  },
  {
    id: 14,
    title: 'Vessel',
    image: '/images/polaroids/polaroid-14.jpg'
  },
  {
    id: 15,
    title: 'Rose Window',
    image: '/images/polaroids/polaroid-15.jpg'
  },
  {
    id: 16,
    title: 'Still Water',
    image: '/images/polaroids/polaroid-16.jpg'
  },
  {
    id: 17,
    title: 'Lookout',
    image: '/images/polaroids/polaroid-17.jpg'
  },
  {
    id: 18,
    title: 'Ljubljanica',
    image: '/images/polaroids/polaroid-18.jpg'
  },
  {
    id: 19,
    title: 'Chapel in Mist',
    image: '/images/polaroids/polaroid-19.jpg'
  }
]

function Polaroids() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const [lightboxTitle, setLightboxTitle] = useState('')

  const openLightbox = (image, title) => {
    setLightboxImage(image)
    setLightboxTitle(title)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxTitle('')
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="page">
      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt={lightboxTitle} />
            <p className="lightbox-caption">{lightboxTitle}</p>
          </div>
        </div>
      )}

      <div className="container">
        <section className="section">
          <div className="section-header fade-in">
            <h1 className="section-title">Polaroids</h1>
            <p className="section-subtitle">
              Instant film photography — capturing architecture, light, and moments around London.
            </p>
          </div>
          
          <div className="polaroid-grid fade-in">
            {polaroids.map((polaroid) => (
              <div 
                key={polaroid.id} 
                className="polaroid-item"
                onClick={() => openLightbox(polaroid.image, polaroid.title)}
              >
                <div className="polaroid-frame">
                  <div className="polaroid-image">
                    <img 
                      src={polaroid.image} 
                      alt={polaroid.title}
                      onError={(e) => {
                        if (e.target.src.endsWith('.png')) {
                          e.target.src = polaroid.image.replace('.png', '.jpg')
                        }
                      }}
                    />
                  </div>
                  <div className="polaroid-caption">
                    <h3>{polaroid.title}</h3>
                    <p>{polaroid.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="polaroid-note fade-in">
            <p>
              Shot on Polaroid 600 and Instax Wide. The unpredictability of instant film 
              mirrors something I find valuable in architecture — the beauty of imperfection, 
              the traces of process, the happy accidents.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Polaroids
