import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import PhotographyPage from './pages/PhotographyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StudioPage from './pages/StudioPage';
import ExperiencePage from './pages/ExperiencePage';
import InvestmentPage from './pages/InvestmentPage';
import SessionsPage from './pages/SessionsPage';
import PricingFaqPage from './pages/PricingFaqPage';
import BlogPage from './pages/BlogPage';
import FAQAndPolicyPage from './pages/FAQAndPolicyPage';
import PricingPage from './pages/PricingPage';
import WhatToExpectPage from './pages/WhatToExpectPage';
import ImageDetailPage from './pages/ImageDetailPage';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';

// Add CSS animations and Google Fonts
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Hind:wght@300;400;500;600;700&display=swap');

  @keyframes scaleUp {
    from { transform: scale(1); }
    to { transform: scale(1.05); }
  }
  
  @keyframes moveBackgroundSmooth {
    0% { 
      background-position: 0% 0%;
    }
    15% {
      background-position: 20% 25%;
    }
    30% {
      background-position: 40% 30%;
    }
    45% {
      background-position: 10% 60%;
    }
    60% {
      background-position: 50% 20%;
    }
    75% {
      background-position: 30% 10%;
    }
    90% {
      background-position: 60% 40%;
    }
    100% { 
      background-position: 0% 0%;
    }
  }
  
  /* Typography - Professional & Stylish Fonts */
  * {
    font-family: 'Hind', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  
  body, p, span, div, li, a {
    font-family: 'Hind', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, .headline, .title {
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 600;
    letter-spacing: -0.02em;
  }
  
  h1 {
    font-size: clamp(32px, 5vw, 64px);
    line-height: 1.2;
    font-weight: 700;
  }
  
  h2 {
    font-size: clamp(28px, 4vw, 48px);
    line-height: 1.2;
    font-weight: 600;
  }
  
  h3 {
    font-size: clamp(24px, 3vw, 36px);
    line-height: 1.3;
    font-weight: 600;
  }
  
  h4 {
    font-size: clamp(20px, 2.5vw, 28px);
    line-height: 1.3;
    font-weight: 500;
  }
  
  h5 {
    font-size: clamp(18px, 2vw, 24px);
    line-height: 1.4;
    font-weight: 500;
  }
  
  h6 {
    font-size: clamp(16px, 1.5vw, 18px);
    line-height: 1.5;
    font-weight: 500;
  }
  @keyframes backgroundOpacity {
    0% { 
      opacity: 0.4;
    }
    50% { 
      opacity: 1;
    }
    100% { 
      opacity: 0.4;
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  @keyframes invertColors {
    0%, 5%, 100% {
      filter: invert(0);
    }
    5.5%, 6% {
      filter: invert(1);
    }
  }
  
  @keyframes breathingFade {
    0%, 65%, 100% {
      color: white;
    }
    32.5% {
      color: rgba(200, 200, 200, 1);
    }
  }
  
  .hero-title {
    color: white;
    animation: breathingFade 15s ease-in-out infinite;
    font-family: 'Inter', sans-serif;
  }
  
  @keyframes fadeInSlide {
    0% {
      opacity: 0.3;
      transform: translateY(5px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .header {
    position: relative;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  }
  
  .header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/header.png') center/cover no-repeat;
    background-size: 125%;
    /* only animate movement (no opacity changes) and increase speed */
    animation: moveBackgroundSmooth 25s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    z-index: 0;
    pointer-events: none;
  }
  
  .header-content {
    position: relative;
    z-index: 1;
  }
  
  .booking-container {
    transition: all 0.3s ease-in-out;
    opacity: 1;
    filter: invert(1);
  }
  
  .booking-container:hover {
    opacity: 1;
    filter: invert(0);
  }
  
  .booking-container:hover .booking-text {
    font-weight: bold;
  }

  /* Header Social Icons - BPA Style */
  .header-social-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    transition: color 0.3s ease-in-out;
    text-decoration: none;
  }

  .header-social-icon:hover {
    color: #4A90E2;
  }
  
  .nav-button {
    transition: all 0.3s ease-in-out;
    background-color: transparent !important;
    border-radius: 12px !important;
    padding: 10px 5px !important;
    gap: 5px !important;
    margin: 0 5px !important;
    filter: none;
    color: currentColor;
    opacity: 1 !important;
    font-size: 1.1rem;
  }
  
  .nav-button:hover {
    filter: none;
    background-color: transparent !important;
    border-radius: 12px !important;
    padding: 10px 5px !important;
    opacity: 1 !important;
    color: currentColor !important;
  }

  .nav-button:hover svg {
    stroke: #666666 !important;
  }

  .nav-button.active {
    background-color: transparent !important;
    border-radius: 12px !important;
    padding: 10px 5px !important;
    opacity: 1 !important;
    color: currentColor !important;
  }
  
  .portfolio-container {
    transition: all 0.25s ease-in-out;
    z-index: 20;
  }

  .portfolio-container:hover {
    opacity: 1 !important;
    filter: none !important;
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 8px 20px rgba(0,0,0,0.10) !important;
  }
  
  .portfolio-container:hover .portfolio-text {
    font-weight: bold;
  }

  .split-images-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    z-index: 0;
    pointer-events: none;
    background-color: white;
  }

  .split-image-left {
    width: calc(50% - 10px);
    height: 100%;
    background: url('/images/JRP_0485.jpg') center/cover no-repeat;
  }

  .split-image-right {
    width: calc(50% - 10px);
    height: 100%;
    background: url('/images/JRP_0501.jpg') center/cover no-repeat;
  }

  /* Gallery image breathing brightness animation */
  @keyframes breatheBrightness {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
  }

  /* Subtle 10% gradient overlay helper for gallery items */
  .gallery-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.10), rgba(0,0,0,0));
    pointer-events: none;
    opacity: 1;
  }

  .gallery-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    animation: breatheBrightness 6s ease-in-out infinite;
    transition: transform 0.5s ease;
  }

  /* Animated gradient button (purple -> red) */
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animated-gradient-btn {
    background: linear-gradient(90deg, #7c3aed 0%, #3d1a5f 50%, #000000 100%);
    background-size: 200% 200%;
    /* faster gradient movement */
    animation: gradientShift 2s ease infinite;
    color: white;
    border-radius: 12px;
    padding: 1rem 2.5rem;
    font-weight: 700;
    box-shadow: 0 18px 30px rgba(124,58,237,0.12), 0 6px 12px rgba(0,0,0,0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .animated-gradient-btn:active {
    transform: translateY(2px);
    box-shadow: 0 10px 18px rgba(236,72,153,0.10), 0 4px 8px rgba(124,58,237,0.06);
  }

  /* Services button - only shows background on hover/active */
  .nav-button.hover\\:bg-gray-100:hover,
  .nav-button.active\\:bg-gray-100:active {
    background-color: #f3f4f6 !important;
  }

  /* Social media icons in header */
  .social-icon {
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
  }

  .social-icon:hover {
    transform: scale(1.15);
    background-color: rgba(0, 0, 0, 0.05);
  }

  .social-icon svg {
    transition: all 0.3s ease;
    width: 18px;
    height: 18px;
  }`;

const icons = {
  logo: (
    <div
      className="relative flex items-center justify-center text-black"
      style={{ width: '72px', height: '72px', transform: 'translateX(-20px)' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-16 w-16" viewBox="0 0 24 24">
        <path
          fill="#0f0f0f"
          stroke="#0f0f0f"
          strokeWidth="0.7"
          strokeLinejoin="round"
          d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12z"
        />
        <path
          fill="transparent"
          stroke="#0f0f0f"
          strokeWidth="0.7"
          strokeLinejoin="round"
          d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
        />
      </svg>
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-6 opacity-0 polaroid-drop pointer-events-none mt-2">
        <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          <path d="M0 5C0 2.23858 2.23858 0 5 0H95C97.7614 0 100 2.23858 100 5V115C100 117.761 97.7614 120 95 120H5C2.23858 120 0 117.761 0 115V5Z" fill="white" />
          <rect x="10" y="10" width="80" height="80" fill="#d1d5db" />
        </svg>
      </div>
    </div>
  ),
  gallery: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
  ),
  camera: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path></svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 8.048M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path></svg>
  ),
  phone: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
  ),
  home: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4V3"></path></svg>
  ),
  chevronUp: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
  ),
  chevronDown: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
  ),
  dollar: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  ),
  instagram: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/></svg>
  ),
  facebook: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  ),
  twitter: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.882l7.687-8.793-8.156-10.707h6.57l4.707 6.225 5.516-6.225zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
  linkedin: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
  ),
  youtube: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  ),
};

const navItems = [
  { icon: null, label: 'Home' },
  { icon: icons.gallery, label: 'Gallery' },
  { icon: null, label: 'Services' },
  { icon: null, label: 'About' },
  { icon: icons.phone, label: 'Contact' },
  { icon: null, label: 'The Studio' },
  { icon: null, label: 'Blog' },
  { icon: icons.dollar, label: 'Pricing' },
  { icon: null, label: 'What to Expect' },
  { icon: null, label: 'FAQ & Policy' },
];

const App = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <style>{styles}</style>
      
      {/* Topbar Header - Hidden on image detail page */}
      {!selectedImageId && (
      <header className="header w-full shadow-sm" style={{ height: isAdmin ? '282px' : 'auto', minHeight: isAdmin ? '282px' : 'auto' }}>
        {/* Header Content - Glassmorphic Design */}
        <div className="header-content w-full h-full flex flex-col items-center justify-between px-4 sm:px-6 md:px-8 py-4 relative" style={{ paddingTop: isAdmin ? '50px' : '16px' }}>
          {/* Social Media Icons - Top Right */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 md:right-8 flex items-center gap-1 sm:gap-2 md:gap-3 flex-wrap max-w-[50%] justify-end">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="header-social-icon" title="Instagram">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.646-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="header-social-icon hidden sm:inline-flex" title="X (Twitter)">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.1-6.47-5.833 6.47H2.423l7.723-8.835L1.604 2.25h6.598l4.644 5.7 5.273-5.7zM17.002 18.335h1.395L6.627 3.864H5.116l11.886 14.471z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="header-social-icon hidden sm:inline-flex" title="Facebook">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://flickr.com" target="_blank" rel="noopener noreferrer" className="header-social-icon hidden md:inline-flex" title="Flickr">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/></svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="header-social-icon hidden md:inline-flex" title="Pinterest">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path d="M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4z" fill="white"/></svg>
            </a>
          </div>

          {/* Title Section with Camera Icon on Left */}
          <div className="flex-1 flex items-center justify-center gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-4 md:mt-0 mb-4 md:mb-0">
            {/* Camera Icon - Left */}
            <div className="flex items-center flex-shrink-0">
              <div
                className="relative flex items-center justify-center text-black"
                style={{ width: 'clamp(48px, 8vw, 72px)', height: 'clamp(48px, 8vw, 72px)', transform: 'translateX(0)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" viewBox="0 0 24 24">
                  <path
                    fill="#0f0f0f"
                    stroke="#0f0f0f"
                    strokeWidth="0.7"
                    strokeLinejoin="round"
                    d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12z"
                  />
                  <path
                    fill="transparent"
                    stroke="#0f0f0f"
                    strokeWidth="0.7"
                    strokeLinejoin="round"
                    d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
                  />
                </svg>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-6 opacity-0 polaroid-drop pointer-events-none mt-2">
                  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                    <path d="M0 5C0 2.23858 2.23858 0 5 0H95C97.7614 0 100 2.23858 100 5V115C100 117.761 97.7614 120 95 120H5C2.23858 120 0 117.761 0 115V5Z" fill="white" />
                    <rect x="10" y="10" width="80" height="80" fill="#d1d5db" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Title - Right */}
            <span className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl fredericka-the-great-regular text-center sm:text-left leading-tight">Jinette Ramos Photography</span>
          </div>

          {/* Glassmorphic Navigation Bar - 15px below original position */}
          <nav className="hidden md:flex items-center justify-center relative" style={{ marginTop: '45px' }}>
            <div 
              className="relative flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-[2rem] border transition-all duration-500 flex-wrap justify-center max-w-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.1) 100%)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: `
                  0 20px 60px -15px rgba(0, 0, 0, 0.2),
                  0 0 0 1px rgba(255, 255, 255, 0.15) inset,
                  0 1px 3px 0 rgba(255, 255, 255, 0.4) inset,
                  0 -1px 0 0 rgba(0, 0, 0, 0.03) inset
                `,
                backdropFilter: 'blur(24px) saturate(200%)',
                WebkitBackdropFilter: 'blur(24px) saturate(200%)',
              }}
            >
              {/* Subtle radial gradient overlay for depth */}
              <div 
                className="absolute inset-0 rounded-[2rem] pointer-events-none overflow-hidden"
                style={{
                  background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
                }}
              />
              
              {/* Subtle animated shimmer effect */}
              <div 
                className="absolute inset-0 rounded-[2rem] pointer-events-none opacity-30"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite',
                }}
              />
              
              {navItems.map(({ icon, label }) => {
                const isActive = activePage === label;
                return (
                  <button
                key={label} 
                    onClick={() => setActivePage(label)}
                    className={`group relative px-3 md:px-5 py-2 md:py-2.5 rounded-xl font-medium text-xs md:text-sm transition-all duration-300 ease-out ${
                      isActive
                        ? 'text-black'
                        : 'text-gray-700 hover:text-black'
                    }`}
                    style={isActive ? {
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.15) 100%)',
                      boxShadow: `
                        0 4px 12px 0 rgba(0, 0, 0, 0.15),
                        0 0 0 1px rgba(255, 255, 255, 0.5) inset,
                        0 2px 4px 0 rgba(255, 255, 255, 0.6) inset,
                        0 -1px 0 0 rgba(0, 0, 0, 0.05) inset
                      `,
                    } : {
                      background: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.05) 100%)';
                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 4px 12px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.3) inset';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    {isActive && (
                      <>
                        {/* Active state inner glow */}
                        <div 
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.2) 100%)',
                            boxShadow: '0 2px 8px 0 rgba(255, 255, 255, 0.5) inset, 0 -1px 0 0 rgba(0, 0, 0, 0.05) inset',
                          }}
                        />
                        {/* Active indicator line */}
                        <div 
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.4) 20%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.4) 80%, transparent 100%)',
                            boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.3)',
                          }}
                        />
                      </>
                    )}
                    {/* Hover effect overlay */}
                    {!isActive && (
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
                          boxShadow: '0 1px 3px 0 rgba(255, 255, 255, 0.3) inset',
                        }}
                      />
                    )}
                    <span className="relative z-10 font-semibold tracking-wide whitespace-nowrap">{label}</span>
                  </button>
                );
              })}
            </div>
          </nav>


          {/* Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden absolute bottom-4 right-4 z-20">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors bg-white/80 backdrop-blur-sm"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-white/95 backdrop-blur-lg z-50 md:hidden flex flex-col items-center justify-center">
              <nav className="flex flex-col items-center gap-6 px-6">
                {navItems.map(({ icon, label }) => {
                  const isActive = activePage === label;
                  return (
                    <button
                      key={label}
                      onClick={() => {
                        setActivePage(label);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-2xl font-semibold tracking-wide transition-all duration-300 ${
                        isActive ? 'text-black border-b-2 border-black' : 'text-gray-600'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {selectedImageId ? (
          <ImageDetailPage
            photoId={selectedImageId}
            onBack={() => {
              setSelectedImageId(null);
              setActivePage('Gallery');
            }}
            onNavigate={(photoId) => setSelectedImageId(photoId)}
          />
        ) : (
          <>
        {activePage === 'Home' && <HomePage />}
            {activePage === 'Gallery' && (
              <PhotographyPage
                onImageClick={(photoId) => {
                  setSelectedImageId(photoId);
                }}
                isAdmin={isAdmin}
              />
            )}
            {activePage === 'Services' && <ServicesPage />}
        {activePage === 'About' && <AboutPage />}
        {activePage === 'Contact' && <ContactPage />}
        {activePage === 'The Studio' && <StudioPage />}
            {activePage === 'Blog' && <BlogPage isAdmin={isAdmin} />}
        {activePage === 'Pricing' && <PricingPage />}
        {activePage === 'What to Expect' && <WhatToExpectPage />}
        {activePage === 'FAQ & Policy' && <FAQAndPolicyPage />}
          </>
        )}
      </main>

      {/* Footer - Hidden on image detail page */}
      {!selectedImageId && <Footer onAdminClick={() => setShowAdminLogin(true)} />}

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <AdminLogin
          onLogin={() => {
            setIsAdmin(true);
            setShowAdminLogin(false);
          }}
          onClose={() => setShowAdminLogin(false)}
        />
      )}

      {/* Admin Panel */}
      <AdminPanel
        isActive={isAdmin}
        onExit={() => setIsAdmin(false)}
        onSave={() => {
          // Save functionality will be implemented
          alert('Changes saved!');
        }}
        onImageChange={(change) => {
          console.log('Image changed:', change);
        }}
      />
    </div>
  );
};

export default App;
