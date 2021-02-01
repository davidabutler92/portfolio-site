import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.root}>
      <Link
        smooth
        activeClassName="selected"
        activeStyle={{ color: 'lightblue' }}
        to="/#section-home"
      >
        Home
      </Link>
      <Link
        smooth
        activeClassName="selected"
        activeStyle={{ color: 'lightblue' }}
        to="/about#section-about"
      >
        About
      </Link>
      <Link
        smooth
        activeClassName="selected"
        activeStyle={{ color: 'lightblue' }}
        to="/portfolio#section-portfolio"
      >
        Portfolio
      </Link>
      <Link
        smooth
        activeClassName="selected"
        activeStyle={{ color: 'lightblue' }}
        to="/resume#section-resume"
      >
        Resume
      </Link>
      <Link
        smooth
        activeClassName="selected"
        activeStyle={{ color: 'lightblue' }}
        to="/contact#section-contact"
      >
        Contact
      </Link>
    </div>
  );
}
