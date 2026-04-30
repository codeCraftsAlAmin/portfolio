export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Recent Projects</h2>
      <p className="section-sub">A showcase of full-stack applications built with modern tools and scalable architecture.</p>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-thumb"></div>
          <div className="project-info">
            <div className="project-tag">Full Stack (PH Tour)</div>
            <h3>Tour Management System</h3>
            <p>Built with Node.js, Express, and Prisma. Features role-based auth and real-time notifications.</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-thumb"></div>
          <div className="project-info">
            <div className="project-tag">E-Commerce</div>
            <h3>NextMart Platform</h3>
            <p>A full-stack e-commerce system featuring Redux state management and secure JWT authentication.</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-thumb"></div>
          <div className="project-info">
            <div className="project-tag">Next.js + Zod</div>
            <h3>Planora Event System</h3>
            <p>Event management with Cloudinary integration and TanStack form validation.</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-thumb"></div>
          <div className="project-info">
            <div className="project-tag">FastAPI</div>
            <h3>Task Master API</h3>
            <p>A high-performance Todo application built using FastAPI, SQLAlchemy, and Pydantic.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
