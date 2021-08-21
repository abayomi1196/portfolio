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
    text: 'Food ordering application built for Tamuno Exalted Fingers (TEF) Restaurant. I was tasked primarily with connecting to the backend and implementing general application functionality.',
  },

  {
    title: 'Propexx Admin Console',
    image:
      'https://res.cloudinary.com/ayo-clodinary/image/upload/v1629496452/propexx-preview_mxqkww.png',
    stack: ['React', 'Redux', 'Axios'],
    url: 'https://admin.propexx.com',
    text: 'Admin Console for a Property Management Dashboard Application, used primarily to manage staff, agents, customers, properties and more',
  },
  {
    title: 'Netflix Clone',
    image:
      'https://res.cloudinary.com/ayo-clodinary/image/upload/v1629496485/netflix-preview_l1zrjm.png',
    stack: ['React', 'SASS', 'Firebase'],
    url: 'https://ayosnetflixclone2.netlify.app/',
    github: 'https://github.com/AbayomiAyodele/netflix-clone',
    text: "A beginner's attempt at cloning the popular streaming service. built primarily to master basic to intermediate React topics, also an introduction to Firebase",
  },
  {
    title: 'Countries of the world.',
    image:
      'https://res.cloudinary.com/ayo-clodinary/image/upload/v1629496452/countries-preview_f53inu.png',
    stack: ['React', 'SASS'],
    url: 'https://ayoscountries2.netlify.app/',
    github: 'https://github.com/AbayomiAyodele/countries-of-the-world',
    text: 'A front-end challenge that required me to integrate with the REST Countries API to pull country data and display it like in the designs.',
  },
];
