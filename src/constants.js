import chatableLogo from './assets/chatable.png';
import cardCovenLogo from './assets/cardCoven.png';
import apiLogo from './assets/apiLogo.png';
import mathLogo from './assets/math.png';

export const APP_LINKS = [
  {
    path: '/#section-home',
    title: 'Home',
  },
  {
    path: '/resume#section-resume',
    title: 'Resume',
  },
  {
    path: '/projects#section-projects',
    title: 'Projects',
  },
  {
    path: '/about#section-about',
    title: 'About',
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
    title: 'Math Problems',
    alt: 'Math Problems logo',
    type: 'API',
    githubUrl: 'https://github.com/m4thl33tz/math-problems-api',
    deployedUrl: 'https://math-problems-staging.herokuapp.com/',
  },
  {
    image: chatableLogo,
    title: 'Chatable',
    alt: 'Chatable logo',
    type: 'Fullstack',
    githubUrl: 'https://github.com/Chatable-2021',
    deployedUrl: 'https://adoring-wright-0eba98.netlify.app/',
  },
  {
    image: mathLogo,
    title: 'M4thl33tz',
    alt: 'M4thl33tz logo',
    type: 'Fullstack',
    githubUrl: 'https://github.com/m4thl33tz/m4thl33tz-client',
    deployedUrl: 'https://m4thl33tz.netlify.app/',
  },
];
