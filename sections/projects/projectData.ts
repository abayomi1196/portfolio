import tefImg from 'public/projects/tef-preview.png';
import propexxImg from 'public/projects/propexx-preview.png';
import netflixImg from 'public/projects/netflix-preview.png';
import countriesImg from 'public/projects/countries-preview.png';

export const projects = [
  {
    title: 'TEF Restaurant',
    image: tefImg,
    stack: ['React', 'Redux', 'Axios', 'Styled Components'],
    url: 'https://food.tef.ng',
    text: 'Food ordering application built for Tamuno Exalted Fingers (TEF) Restaurant. I was tasked primarily with connecting to the backend and implementing general application functionality.',
  },

  {
    title: 'Propexx Admin Console',
    image: propexxImg,
    stack: ['React', 'Redux', 'Axios'],
    url: 'https://admin.propexx.com',
    text: 'Admin Console for a Property Management Dashboard Application, used primarily to manage staff, agents, customers, properties and more',
  },
  {
    title: 'Netflix Clone',
    image: netflixImg,
    stack: ['React', 'SASS', 'Firebase'],
    url: 'https://ayosnetflixclone2.netlify.app/',
    text: "A beginner's attempt at cloning the popular streaming service. built primarily to master basic to intermediate React topics, also an introduction to Firebase",
  },
  {
    title: 'Countries of the world.',
    image: countriesImg,
    stack: ['React', 'SASS'],
    url: 'https://ayoscountries2.netlify.app/',
    text: 'A front-end challenge that required me to integrate with the REST Countries API to pull country data and display it like in the designs.',
  },
];
