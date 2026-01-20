const polaroids = [
  {
    id: 1,
    title: 'Industrial Ring',
    description: 'Faversham, UK',
    price: 40,
    image: '/images/polaroids/polaroid-1.png',
    available: true
  },
  {
    id: 2,
    title: 'Quarry Edge',
    description: 'Wales, UK',
    price: 40,
    image: '/images/polaroids/polaroid-2.png',
    available: true
  },
  {
    id: 3,
    title: 'Timber Frame',
    description: 'Wales, UK',
    price: 45,
    image: '/images/polaroids/polaroid-3.png',
    available: true
  },
  {
    id: 4,
    title: 'Windmill & Ring',
    description: 'Wales, UK',
    price: 40,
    image: '/images/polaroids/polaroid-4.png',
    available: true
  },
  {
    id: 5,
    title: 'Stone Cottage',
    description: 'Wales, UK',
    price: 40,
    image: '/images/polaroids/polaroid-5.png',
    available: true
  },
  {
    id: 6,
    title: 'Gothic Windows',
    description: 'Wales, UK',
    price: 45,
    image: '/images/polaroids/polaroid-6.png',
    available: true
  },
  {
    id: 7,
    title: 'River Valley',
    description: 'Wales, UK',
    price: 40,
    image: '/images/polaroids/polaroid-7.png',
    available: true
  },
  {
    id: 8,
    title: 'Overgrown Barn',
    description: 'Wales, UK',
    price: 45,
    image: '/images/polaroids/polaroid-8.png',
    available: true
  }
]

function Shop() {
  const handlePurchase = (item) => {
    const message = `Hi! I'm interested in purchasing "${item.title}" (£${item.price}) from your polaroid collection.`
    const instagramUrl = `https://instagram.com/rawand.iterations`
    window.open(instagramUrl, '_blank')
  }

  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <div className="section-header fade-in">
            <h1 className="section-title">Shop</h1>
            <p className="section-subtitle">
              Original instant film photographs. Each polaroid is a unique piece — 
              no reproductions, no prints. Shot on Polaroid 600 film.
            </p>
            <p className="section-subtitle mt-sm" style={{ fontSize: '0.875rem' }}>
              To purchase, click on any item to message me on Instagram.
            </p>
          </div>
          
          <div className="shop-grid">
            {polaroids.map((item, index) => (
              <div 
                key={item.id} 
                className="shop-item fade-in"
                style={{ animationDelay: `${index * 0.05}s`, cursor: 'pointer' }}
                onClick={() => handlePurchase(item)}
              >
                <div className="shop-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="shop-info">
                  <h3>{item.title}</h3>
                  <p className="shop-price">£{item.price}</p>
                  <p className="shop-status">
                    {item.available ? '● Available' : '○ Sold'}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-lg" style={{ maxWidth: '600px' }}>
            <h3 style={{ marginBottom: '1rem' }}>About the Polaroids</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
              These photographs were taken during site visits and explorations across 
              the UK — primarily in Wales and Kent. Each image captures the quiet 
              intersection of vernacular architecture and landscape that informs my 
              architectural work.
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
              All polaroids ship flat, protected between cardboard, via Royal Mail 
              First Class. UK shipping is included in the price. For international 
              shipping, please message me directly.
            </p>
            <a 
              href="https://instagram.com/rawand.iterations" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
            >
              Message on Instagram
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Shop
