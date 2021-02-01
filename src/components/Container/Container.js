import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';

export default function Container() {
  return (
    <main>
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </main>
  );
}