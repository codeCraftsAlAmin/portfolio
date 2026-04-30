import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Recent Projects</h2>
      <p className="section-sub">A showcase of full-stack applications built with modern tools and scalable architecture.</p>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-thumb">
            <Image src="/Screenshot (647).png" alt="Planora Event System" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="project-info">
            <div className="project-tag">Next.js + Zod</div>
            <h3>Planora Event System</h3>
            <p style={{ marginBottom: '16px' }}>Event management with Cloudinary integration and TanStack form validation.</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/codeCraftsAlAmin/planora_a5" target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding: '6px 12px', fontSize: '12px' }}>GitHub</a>
              <a href="https://planora-frontend-mu.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }}>Live Demo</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-thumb">
            <Image src="/Screenshot (649).png" alt="Medistore Platform" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="project-info">
            <div className="project-tag">E-Commerce</div>
            <h3>Medistore Platform</h3>
            <p style={{ marginBottom: '16px' }}>A full-stack e-commerce system featuring Redux state management and secure JWT authentication.</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/codeCraftsAlAmin/medistore-a4" target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding: '6px 12px', fontSize: '12px' }}>GitHub</a>
              <a href="https://medistore-a4.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }}>Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
