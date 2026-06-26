function About() {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <div className="about-content fade-in">
            <div className="about-text">
              <p className="section-eyebrow">A short note</p>
              <h1 style={{ marginBottom: 'var(--space-md)', fontStyle: 'italic' }}>About</h1>

              <p>
                I'm Rawand, a Part 1 Architectural Assistant based in London. A lot of
                my projects focus on adaptive reuse. I enjoy using the existing conditions
                as a tool rather than a constraint.
              </p>

              <p>
                The process of transforming what is already on site into something new is
                what I find just as enjoyable as the end result, if not more so.
              </p>

              <p>
                My focus on adaptive reuse began in my second year at UEL in Unit B,
                studying under Luke Jones and Toshiya Kogawa. This was expanded and
                developed further in my third year in Unit C under Philip Christou
                and Rob Whitlock.
              </p>

              <div className="about-meta">
                <div>
                  <h3>Education</h3>
                  <p>
                    BSc (Hons) Architecture<br />
                    ARB / RIBA Part 1<br />
                    University of East London<br />
                    2022 – 2026
                  </p>
                </div>
                <div>
                  <h3>Based in</h3>
                  <p>London, UK</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
