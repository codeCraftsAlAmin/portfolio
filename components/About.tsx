import Image from 'next/image';
import { SiNextdotjs, SiFastapi, SiPostgresql, SiPrisma, SiDocker, SiRedux } from 'react-icons/si';
export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid" style={{ marginTop: '40px' }}>
        <div className="about-photo">
          <Image
            src="/IMG_20260517_154527.jpg"
            alt="Al-Amin Ahmed"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="about-content">
          <h2>I&apos;m Al-Amin Ahmed.</h2>
          <p>I am a software developer with a deep passion for clean architecture and full-stack engineering. My journey began with mastering TypeScript and has since evolved into building complex enterprise systems.</p>
          <p>I enjoy solving the intricate challenges of backend logic while ensuring the frontend remains responsive and user-friendly.</p>
          <div style={{ marginTop: '30px' }}>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '16px' }}>Primary Tech Stack</div>
            <div className="tech-stack" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '30px' }}>
              <div title="Next.js" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: 'var(--text)' }}><SiNextdotjs size={24} /></div>
              <div title="PostgreSQL" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: '#336791' }}><SiPostgresql size={24} /></div>
              <div title="Prisma" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: 'var(--text)' }}><SiPrisma size={24} /></div>
              <div title="Docker" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: '#2496ED' }}><SiDocker size={24} /></div>
              <div title="Redux" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: '#764ABC' }}><SiRedux size={24} /></div>
            </div>
            
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '12px' }}>Skills & Technologies</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                "TypeScript", "Node.js", "Express", "MongoDB & Mongoose", "TailwindCSS", 
                "JWT & OAuth", "Stripe & SSLCommerz", "Redis", 
                "GraphQL & Apollo", "RTL", "AWS", "NGINX", "Linux", 
                "PM2", "GitHub Actions (CI/CD)"
              ].map(skill => (
                <span key={skill} className="tech-badge">{skill}</span>
              ))}
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
