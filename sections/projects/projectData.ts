export type projectType = {
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
    title: "Tamuno Exalted Fingers (TEF) Restaurant",
    slug: "tef-restaurant",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1629496456/tef-preview_gzgwkh.png",
    stack: ["React", "Redux", "Axios", "Styled Components"],
    url: "https://food.tef.ng",
    summary:
      "Food ordering application built for Tamuno Exalted Fingers (TEF) Restaurant. Users can view available choices, add to cart and then make orders either anonymously or as logged in users. I was tasked primarily with connecting to the backend and implementing general application functionality.",
    implementation:
      "Application was built with React, Styled with vanilla CSS, Connection to the backend & setting up of API services was done with Axios, Application state was handled with Redux",
    lessonsLearned:
      "Project really challenged my knowledge and understanding of Application state and how to handle it, in which cases to implement component-only state and in what cases state should be stored in Redux. Also made use of some external libraries, i.e Formik.",
    otherProjects: [
      { name: "Movie Search App", link: "/project/movie-app" },
      { name: "Netflix Clone", link: "/project/netflix-clone" },
    ],
  },
  {
    title: "Crypto News App",
    slug: "crypto-app",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1633901658/crypto-app_p6ow9j.png",
    stack: [
      "ReactJS",
      "Typescript",
      "Redux-Toolkit",
      "Redux-Toolkit-Query",
      "AntDesign",
    ],
    url: "https://ayos-crypto-app.netlify.app/",
    github: "https://github.com/AbayomiAyodele/crypto-app",
    inDevelopment: false,
    summary:
      "Web Application I built showing current crypto stats i.e Top 10 Cryptocurrencies by market cap, current world news around cryptocurrency, exchanges etc. Was my first introduction to RTK Query and all the goodies that come with it.",
    implementation:
      "Application was set up using Typescript, Redux-Toolkit, & Redux-Toolkit-Query. I was interested primarily in building an application with the new RTK Query library. I also used Ant Design for the first time with this project, and it was great. The variety of styling options i have now for my React projects make me feel good. :)",
    lessonsLearned:
      "Using available libraries and Open source packages to simplify a lot of the development process e,g the caching offered by the RTK Query library would have been very difficult to setup from scratch but was really simplified, also used Typescript and had to type all my API responses. This really helped with the auto-complete and type-checking preventing a lot of irritating execution time bugs.",
    otherProjects: [
      {
        name: "TEF Restaurant",
        link: "/project/tef-restaurant",
      },
      {
        name: "Netflix Clone",
        link: "/project/netflix-clone",
      },
    ],
  },

  {
    title: "Movie Search App",
    slug: "movie-app",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1636019520/movie-app_qr5fbx.png",
    stack: ["NuxtJS", "SCSS", "Axios", "Heroku"],
    url: "https://ayos-movie-app.herokuapp.com/",
    github: "https://github.com/AbayomiAyodele/nuxt-movie-app",
    summary:
      "Web Application showing currently the top currently streaming movies in cinemas and online platforms. Users can also search for different movies and access details of selected movie.",
    implementation:
      "Built with NuxtJS, Styled using SCSS, connected to the TMDB API for up-to-date movie details, data fetching was done with Axios.",
    lessonsLearned:
      "Served as an introduction to the VueJS / Nuxt ecosystem, in this project, even though i barely scratched the surface, i got a feel of how concise the ecosystem is, from built in patterns for state management, application routing & optimized component rendering. It was definitely a refresher compared to React.",
    otherProjects: [
      { name: "Crypto News App", link: "/project/crypto-app" },
      {
        name: "TEF Restaurant",
        link: "/project/tef-restaurant",
      },
    ],
  },

  {
    title: "Netflix Clone",
    slug: "netflix-clone",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1629496485/netflix-preview_l1zrjm.png",
    stack: ["React", "Styled Components", "Firebase"],
    url: "https://ayosnetflixclone2.netlify.app/",
    github: "https://github.com/AbayomiAyodele/netflix-clone",
    summary:
      "My attempt at cloning the popular streaming service. built primarily to master basic to intermediate React topics, also an introduction to Firebase. You can unfortunately only watch one video :)",
    implementation:
      "Built with React, Styled using the popular CSS in JS library - Styled Components, also has a static backend implemented with Firebase.",
    lessonsLearned:
      "Proper project architecture and file naming patterns for a medium sized react project that would improve efficiency, readability, & scalability",
    otherProjects: [
      { name: "Movie Search App", link: "/project/movie-app" },
      {
        name: "Crypto News App",
        link: "/project/crypto-app",
      },
    ],
  },
];
