import chatableLogo from './assets/chatable.png';
import cardCovenLogo from './assets/cardCoven.png';
import apiLogo from './assets/apiLogo.png';

export const APP_LINKS = [
  {
    path: '/#section-home',
    title: 'Home',
  },
  {
    path: '/about#section-about',
    title: 'About',
  },
  {
    path: '/projects#section-projects',
    title: 'Projects',
  },
  {
    path: '/resume#section-resume',
    title: 'Resume',
  },
  {
    path: '/contact#section-contact',
    title: 'Contact',
  },
];

export const APP_LOGOS = [
  {
    image: cardCovenLogo,
    title: 'Card Coven',
    alt: 'Card Coven logo',
    type: 'Fullstack',
    githubUrl: 'https://github.com/cardcoven',
    deployedUrl: '',
  },
  {
    image: apiLogo,
    title: 'Tarty Gram',
    alt: 'Tarty Gram logo',
    type: 'API',
    githubUrl: 'https://github.com/davidabutler92/15_auth_tarty_gram.git',
    deployedUrl: '',
  },
  {
    image: chatableLogo,
    title: 'Chatable',
    alt: 'Chatable logo',
    type: 'Fullstack',
    githubUrl: 'https://github.com/Chatable-2021',
    deployedUrl: '',
  },
];
