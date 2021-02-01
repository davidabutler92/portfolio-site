import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.root}>
      <Link smooth to="/#section-home">
        Home
      </Link>
      <Link smooth to="/about#section-about">
        About
      </Link>
      <Link smooth to="/portfolio#section-portfolio">
        Portfolio
      </Link>
      <Link smooth to="/resume#section-resume">
        Resume
      </Link>
      <Link smooth to="/contact#section-contact">
        Contact
      </Link>
    </div>
  );
}
