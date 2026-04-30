export default function Services() {
  return (
    <section id="services">
      <h2 className="section-title">Services</h2>
      <p className="section-sub">End-to-end development focused on clean code, performance, and modern architecture.</p>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">⌨️</div>
          <h3>Full-Stack Dev</h3>
          <p>Seamlessly bridging the gap between high-performance APIs and intuitive React interfaces.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🖥️</div>
          <h3>Backend Engineering</h3>
          <p>Architecting robust RDBMS systems with PostgreSQL and optimizing queries with Prisma/Mongoose.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">✦</div>
          <h3>DevOps & Cloud</h3>
          <p>Streamlining deployments using Docker, Docker Compose, and AWS cloud infrastructure.</p>
        </div>
      </div>
    </section>
  );
}
