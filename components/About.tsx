import Image from 'next/image';

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid" style={{ marginTop: '40px' }}>
        <div className="about-photo">
          <Image
            src="https://drive.google.com/uc?export=view&id=1ZGoDRdBcdP4JChxJINje-OhIMPEp8LcR"
            alt="Al-Amin Ahmed"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="about-content">
          <h2>I&apos;m Al-Amin Ahmed.</h2>
          <p>I am a software developer with a deep passion for clean architecture and full-stack engineering. My journey began with mastering TypeScript and has since evolved into building complex enterprise systems[cite: 1].</p>
          <p>I enjoy solving the intricate challenges of backend logic while ensuring the frontend remains responsive and user-friendly[cite: 1].</p>
          <div style={{ marginTop: '20px' }}>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '12px' }}>Primary Tech Stack</div>
            <div className="tech-stack" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="tech-badge">Next.js</span>
              <span className="tech-badge">FastAPI</span>
              <span className="tech-badge">PostgreSQL</span>
              <span className="tech-badge">Prisma</span>
              <span className="tech-badge">Docker</span>
              <span className="tech-badge">Redux</span>
            </div>
          </div>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginTop: '20px', marginBottom: '8px' }}>Education & Experience</div>
          <ul className="experience-list">
            <li>
              <div>
                <div className="exp-role">Full-Stack Development</div>
                <div className="exp-company">Next Level Web Development</div>
              </div>
              <div className="exp-year">2026</div>
            </li>
            <li>
              <div>
                <div className="exp-role">Backend & Prisma Specialist</div>
                <div className="exp-company">Planora Project</div>
              </div>
              <div className="exp-year">2026</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
