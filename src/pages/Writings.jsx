const writings = [
  {
    slug: 'brodsky-pichler-baukunst-on-paper',
    title: 'Brodsky and Pichler: Baukunst on Paper',
    course: 'History & Theory — 3rd Year',
    year: '2025',
    abstract: `An exploration of paper architecture and the idea of Baukunst — building-art — examining how Walter Pichler, Peter Zumthor, Brodsky & Utkin, and Peter Märkli use drawing not as preparation for building but as architecture in its own right, where materiality, atmosphere, and enclosure are worked out on paper before stone.`,
    pdf: '/writings/brodsky-pichler-baukunst-on-paper.pdf'
  },
  {
    slug: 'patty-hopkins-gendered-erasure',
    title: 'Patty Hopkins: A Case Study in Gendered Erasure within British High-Tech',
    course: 'History & Theory — 2nd Year',
    year: '2024',
    abstract: `In 2014 the BBC photoshopped Patty Hopkins out of an RIBA group portrait of the architects who pioneered British High-Tech. This essay uses that moment of erasure as a critical entry point — drawing on Critical Theory and a first-hand interview with Dr Deborah Benrós — to examine how female architects have been consistently marginalised in architectural discourse, and what that tells us about systemic gender bias within the profession.`,
    pdf: '/writings/patty-hopkins-gendered-erasure.pdf'
  }
]

function Writings() {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <div className="section-header fade-in">
            <h1 className="section-title">Writings</h1>
            <p className="section-subtitle">Selected essays on architectural history and theory</p>
          </div>

          <div className="writings-list fade-in">
            {writings.map((essay) => (
              <article key={essay.slug} className="writing-item">
                <div className="writing-meta">
                  <span>{essay.course}</span>
                  <span>{essay.year}</span>
                </div>
                <h2 className="writing-title">{essay.title}</h2>
                <p className="writing-abstract">{essay.abstract}</p>
                <div className="writing-actions">
                  <a
                    href={essay.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Read PDF
                  </a>
                  <a
                    href={essay.pdf}
                    download
                    className="writing-download"
                  >
                    Download
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Writings
