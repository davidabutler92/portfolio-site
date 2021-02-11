import React from 'react';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

function Container() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}

export default Container;
