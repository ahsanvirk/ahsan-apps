'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Add parallax effect on mouse move
    const container = document.querySelector('.container');
    const appCard = document.querySelector('.app-card');
    
    if (container && appCard) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;
        
        // Subtle parallax effect on the app card
        (appCard as HTMLElement).style.transform = `translateY(${yPercent * 5}px) rotateX(${yPercent * 2}deg) rotateY(${xPercent * 2}deg)`;
      };

      document.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div className="landing-page-wrapper">
      <div className="container">
      {/* AhsanApps Logo */}
      <div className="logo-container fade-in">
        <Image 
          src="/AhsanAppsLogo.png" 
          alt="AhsanApps Logo" 
          className="company-logo"
          width={200}
          height={200}
          priority
        />
      </div>

      {/* Waitlist Text */}
      <h1 className="waitlist-text fade-in-delay-1">Join the waitlist of my next app now!</h1>

      {/* App Card */}
      <div className="app-card fade-in-delay-2">
        <div className="app-icon-container">
          <Image 
            src="/logo.png" 
            alt="Clear Accent App Icon" 
            className="app-icon"
            width={80}
            height={80}
          />
        </div>
        <div className="app-info">
          <h2 className="app-name">Clear Accent</h2>
          <p className="app-tagline">Train Your Corporate Voice</p>
        </div>
        <Link href="/clearAccent" className="join-button">
          Join Waitlist →
        </Link>
      </div>
      </div>
    </div>
  );
}
