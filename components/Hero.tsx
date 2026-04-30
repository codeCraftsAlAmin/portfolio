import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>
      <div className="hero" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: 'none' }}>
        <div className="hero-content">
          <h1>Hi! I&apos;m Al-Amin, crafting<br/><em>Full-Stack Solutions.</em></h1>
          <p>I specialize in building scalable web applications with Next.js, FastAPI, and robust RDBMS architectures.</p>
          <div className="hero-btns">
            <Link href="#contact" className="btn-primary">Let&apos;s Connect</Link>
            <Link href="#projects" className="btn-ghost">See My Work</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <Image
              src="https://drive.google.com/uc?export=view&id=1ZGoDRdBcdP4JChxJINje-OhIMPEp8LcR"
              alt="Al-Amin Ahmed"
              width={300}
              height={380}
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="stat-bubble stat-1">
            <div className="num">500+</div>
            <div className="lbl">Git Commits</div>
          </div>
          <div className="stat-bubble stat-2">
            <div className="num">TypeScript</div>
            <div className="lbl">Technocrat</div>
          </div>
          <div className="stat-bubble stat-3">
            <div className="num">Backend</div>
            <div className="lbl">Brainiac</div>
          </div>
          <div className="stat-bubble stat-4">
            <div className="num">Next.js</div>
            <div className="lbl">Futurist</div>
          </div>
        </div>
      </div>
    </div>
  );
}
