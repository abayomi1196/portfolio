type projectType = {
  title: string;
  image: string;
  stack: string[];
  url: string;
  github?: string;
  text: string;
};

export const projects: projectType[] = [
  {
    title: 'TEF Restaurant',
    image:
      'https://res.cloudinary.com/ayo-clodinary/image/upload/v1629496456/tef-preview_gzgwkh.png',
    stack: ['React', 'Redux', 'Axios', 'Styled Components'],
    url: 'https://food.tef.ng',
    text: 'Food ordering application built for Tamuno Exalted Fingers (TEF) Restaurant. I was tasked primarily with connecting to the backend and implementing general application functionality. API Services were setup using Axios, and payment was handled with Paystack.',
  },

  {
    title: 'Portfolio Site',
    image:
      'https://res.cloudinary.com/ayo-clodinary/image/upload/v1629498046/portfolio_xua6mv.png',
    stack: ['NextJS', 'TailwindCSS', 'Styled Components'],
    url: 'https://portfolio-ayodele.vercel.app/',
    github: 'https://github.com/AbayomiAyodele/portfolio',
    text: 'My personal website, that contains some details about me, and about some of my previous and most impressive work. NextJS was used to take advantage of Static Site Generation and pre-render the static pages. Styling was handled in a hybrid fashion - both CSS in JS approach and Utility Classes. This was made possible through an external package - Twin.Macro. I also used Typescript to help in the development process.',
  },
  {
    title: 'Netflix Clone',
    image:
      'https://res.cloudinary.com/ayo-clodinary/image/upload/v1629496485/netflix-preview_l1zrjm.png',
    stack: ['React', 'Styled Components', 'Firebase'],
    url: 'https://ayosnetflixclone2.netlify.app/',
    github: 'https://github.com/AbayomiAyodele/netflix-clone',
    text: "A beginner's attempt at cloning the popular streaming service. built primarily to master basic to intermediate React topics, also an introduction to Firebase. Styled using the popular CSS in JS library - Styled Components, also has a static backend implemented with Firebase. You can unfortunately only watch one video :)",
  },
  {
    title: 'Countries of the world.',
    image:
      'https://res.cloudinary.com/ayo-clodinary/image/upload/v1629496452/countries-preview_f53inu.png',
    stack: ['React', 'SASS'],
    url: 'https://ayoscountries2.netlify.app/',
    github: 'https://github.com/AbayomiAyodele/countries-of-the-world',
    text: "A front-end challenge that required me to integrate with the REST Countries API to pull country data and display it like in the designs. Features include Ability to search for a specific country, filter countries by region, country details for all countries, light & dark mode, & view border countries on each country's detail page.",
  },
];
