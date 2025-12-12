import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ChessPhases } from './components/ChessPhases';
import { Courses } from './components/Courses';
import { Testimonials } from './components/Testimonials';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <ChessPhases />
      <Courses />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}