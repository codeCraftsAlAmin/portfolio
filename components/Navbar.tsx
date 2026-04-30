import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <span className="nav-logo">Al-Amin Ahmed</span>
      <ul className="nav-links">
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
      <Link href="#contact" className="btn-primary">Download CV</Link>
    </nav>
  );
}
