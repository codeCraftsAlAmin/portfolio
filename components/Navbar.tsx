import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="24" fill="url(#aLogoGrad)"/>
          <path d="M50 25L25 75H38L43 62H57L62 75H75L50 25ZM46 51L50 40L54 51H46Z" fill="white"/>
        </svg>
        <span style={{ fontSize: '20px', fontWeight: '800', textTransform: 'none', letterSpacing: '0' }}>Al-Amin</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#projects">Work</Link></li>
        <li><Link href="#services">Services</Link></li>
      </ul>
      <Link href="#contact" className="btn-primary">Download CV</Link>
    </nav>
  );
}
