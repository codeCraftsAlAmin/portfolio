import { Code2, Smartphone, PenTool } from 'lucide-react';

export default function Services() {
  const cardStyle = {
    background: 'rgba(15, 23, 42, 0.4)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '16px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
  } as React.CSSProperties;

  const iconContainer = {
    width: '120px',
    height: '120px',
    borderRadius: '16px',
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    color: '#3b82f6',
  };

  return (
    <section id="services">
      <h2 className="section-title">Services</h2>
      <p className="section-sub">From interfaces to full-stack, I build modern products that are scalable and user-friendly.</p>
      <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        <div style={cardStyle}>
          <div style={iconContainer}><Code2 size={48} strokeWidth={1} /></div>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>Web Development</h3>
          <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6' }}>Build fast, scalable, and modern web apps tailored for performance and impact.</p>
        </div>
        <div style={cardStyle}>
          <div style={iconContainer}><Smartphone size={48} strokeWidth={1} /></div>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>Cross-Platform Development</h3>
          <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6' }}>Create seamless experiences across web, mobile, and desktop with one codebase.</p>
        </div>
        <div style={cardStyle}>
          <div style={iconContainer}><PenTool size={48} strokeWidth={1} /></div>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>UI/UX Design</h3>
          <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6' }}>Design intuitive, conversion-driven interfaces that users love to interact with.</p>
        </div>
      </div>
    </section>
  );
}
