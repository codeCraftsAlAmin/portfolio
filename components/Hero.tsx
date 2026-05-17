"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.gsap-hero-text', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2,
    })
    .from('.gsap-hero-photo', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, "-=0.4")
    .from('.gsap-hero-stat', {
      scale: 0.5,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.5)',
    }, "-=0.6");
  }, { scope: container });

  const statStyle = {
    position: 'absolute',
    background: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '12px',
    padding: '12px 20px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  } as React.CSSProperties;

  return (
    <div ref={container} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>
      <div className="hero" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: 'none' }}>
        <div className="hero-content">
          <h1 className="gsap-hero-text" style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: '700', lineHeight: '1.15', marginBottom: '24px' }}>
            Hi! I&apos;m Al-Amin, crafting<br/>
            <span style={{ color: '#fff' }}>Digital Experiences.</span>
          </h1>
          <p className="gsap-hero-text" style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '420px' }}>
            I specialize in building scalable web applications with Next.js, FastAPI, and robust RDBMS architectures.
          </p>
          <div className="hero-btns gsap-hero-text" style={{ display: 'flex', gap: '16px' }}>
            <Link href="#contact" className="btn-primary" style={{ background: '#2563eb', color: '#fff', padding: '12px 32px', borderRadius: '50px', fontWeight: '500' }}>
              Let&apos;s Connect
            </Link>
            <Link href="#projects" className="btn-ghost" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 32px', borderRadius: '50px', fontWeight: '500' }}>
              See My Work
            </Link>
          </div>
        </div>

        <div className="hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          {/* Blue glow background */}
          <div className="gsap-hero-photo" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(15,23,42,0) 70%)', zIndex: -1, borderRadius: '50%' }}></div>
          
          <div className="hero-photo-wrap gsap-hero-photo" style={{ width: '320px', height: '320px', borderRadius: '50%', border: 'none', background: 'transparent', overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/IMG_20260517_154527.jpg"
              alt="Al-Amin Ahmed"
              width={320}
              height={320}
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div className="gsap-hero-stat" style={{ ...statStyle, top: '20px', left: '-40px' }}>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#fff' }}>1M+</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Coding Hours</div>
          </div>
          
          <div className="gsap-hero-stat" style={{ ...statStyle, top: '40px', right: '-40px' }}>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#fff' }}>20+</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>GitHub Repos</div>
          </div>
          
          <div className="gsap-hero-stat" style={{ ...statStyle, bottom: '60px', left: '-60px' }}>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#fff' }}>140+</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Projects Completed</div>
          </div>
          
          <div className="gsap-hero-stat" style={{ ...statStyle, bottom: '20px', right: '-20px' }}>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#fff' }}>365+</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Days of Coding</div>
          </div>
        </div>
      </div>
    </div>
  );
}
