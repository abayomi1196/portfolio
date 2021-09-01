type projectType = {
  title: string;
  slug: string;
  image: string;
  stack: string[];
  url: string;
  github?: string;
  inDevelopment?: boolean;
  summary: string;
  implementation: string;
  lessonsLearned: string;
  otherProjects: { link: string; name: string }[];
};

export const projects: projectType[] = [
  {
    title: 'Tamuno Exalted Fingers (TEF) Restaurant',
    slug: 'tef-restaurant',
    image:
      'https://res.cloudinary.com/ayo-clodinary/image/upload/v1629496456/tef-preview_gzgwkh.png',
    stack: ['React', 'Redux', 'Axios', 'Styled Components'],
    url: 'https://food.tef.ng',
    summary:
      'Food ordering application built for Tamuno Exalted Fingers (TEF) Restaurant. I was tasked primarily with connecting to the backend and implementing general application functionality.',
    implementation:
      'Application was built with React, Connection to the backend & setting up API services was done with Axios, Application state was handled with Redux',
    lessonsLearned:
      'Project really challenged my knowledge and understanding of Application state and how to handle it, in which cases to implement component-only state and in what cases state should be stored in Redux.',
    otherProjects: [
      { name: 'SwiftBespoke Clothing', link: '/project/swiftbespoke' },
      { name: 'Netflix Clone', link: '/project/netflix-clone' },
    ],
  },
  {
    title: 'SwiftBespoke Clothing',
    slug: 'swiftbespoke',
    image:
      'https://res.cloudinary.com/ayo-clodinary/image/upload/v1630522527/Screenshot_from_2021-09-01_19-53-21_gre16k.png',
    stack: ['NextJS', 'Redux-Toolkit', 'Axios', 'CSS Modules'],
    url: 'https://swiftbespoke-react.netlify.app/',
    inDevelopment: true,
    summary:
      'SwiftBespoke is an Online Made-To-Order Fashion E-Commerce Store. Designed to provide pocket-friendly, premium Custom tailoring services to both genders. ',
    implementation:
      'Application was set up using NextJS, Redux-Toolkit, & Axios. I was primarily tasked with connecting to the backend server and implementing general app functionality',
    lessonsLearned:
      'State Persistence between page refresh using Redux Persist, Server Side Rendering and all the complications that come with that with regards persisting the state, Static Site Generation for single product',
    otherProjects: [
      {
        name: 'TEF Restaurant',
        link: '/project/tef-restaurant',
      },
      {
        name: 'Netflix Clone',
        link: '/project/netflix-clone',
      },
    ],
  },
  {
    title: 'Netflix Clone',
    slug: 'netflix-clone',
    image:
      'https://res.cloudinary.com/ayo-clodinary/image/upload/v1629496485/netflix-preview_l1zrjm.png',
    stack: ['React', 'Styled Components', 'Firebase'],
    url: 'https://ayosnetflixclone2.netlify.app/',
    github: 'https://github.com/AbayomiAyodele/netflix-clone',
    summary:
      'My attempt at cloning the popular streaming service. built primarily to master basic to intermediate React topics, also an introduction to Firebase. You can unfortunately only watch one video :)',
    implementation:
      'Built with React, Styled using the popular CSS in JS library - Styled Components, also has a static backend implemented with Firebase.',
    lessonsLearned:
      'Proper project architecture and file naming patterns for a medium sized react project that would improve efficiency, readability, & scalability',
    otherProjects: [
      { name: 'SwiftBespoke Clothing', link: '/project/swiftbespoke' },
      {
        name: 'TEF Restaurant',
        link: '/project/tef-restaurant',
      },
    ],
  },
];
