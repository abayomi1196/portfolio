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
    title: "Anime Webpage",
    slug: "anime",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1638645637/anime-webpage_rw9dat.png",
    stack: ["NextJS", "Context API", "GraphQL", "CSS Modules"],
    url: "https://anime-webpage.vercel.app/",
    github: "https://github.com/abayomi1196/anime-webpage",
    summary:
      "Web application showing most popular animes. Users can view all animes, search for their favorite, and view it in detail. Users are also able to access their favorite characters and other related media as well.",
    implementation:
      "Application was built with NextJS, Styled with CSS Modules, and consumed a GraphQL API. Application state needed by multiple components was shared using the Context API.",
    lessonsLearned:
      "Another refresher on what i love best about working with NextJS, as i was able to pre-render the static home page, and client side render dynamic pages, also playing around with GraphQL exposed me to some of the benefits as opposed to the traditional RESTfull patterns.",
    otherProjects: [
      { name: "Movie Search App", link: "/project/movie-app" },
      { name: "Netflix Clone", link: "/project/netflix-clone" },
    ],
  },
  {
    title: "OctoList Github Project",
    slug: "github",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1638645597/octo-list_q7cafi.png",
    stack: ["React", "Typescript", "Context API", "GraphQL", "CSS Modules"],
    url: "https://octo-list.netlify.app/",
    github: "https://github.com/abayomi1196/github-graphql-app",
    summary:
      "Another web application i built to play around with and get familiar with GraphQL. If u can ignore the crappy name, it wil allow you to view my profile :), search for a username, and view some brief details about that GitHub profile.",
    implementation:
      "Application was set up using React, Typescript, & GraphQL. State was handled with the Context API, to prevent unnecessary prop drilling, while styling was implemented using CSS Modules",
    lessonsLearned:
      "Improved my experience with TypeScript, and especially React and TypeScript, also, React, TypeScript, and GraphQL..., u get the picture.",
    otherProjects: [
      {
        name: "Anime Webpage",
        link: "/project/anime",
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
    github: "https://github.com/abayomi1196/nuxt-movie-app",
    summary:
      "Web Application showing currently the top currently streaming movies in cinemas and online platforms. Users can also search for different movies and access details of selected movie.",
    implementation:
      "Built with NuxtJS, Styled using SCSS, connected to the TMDB API for up-to-date movie details, data fetching was done with Axios.",
    lessonsLearned:
      "Served as an introduction to the VueJS / Nuxt ecosystem, in this project, even though i barely scratched the surface, i got a feel of how concise the ecosystem is, from built in patterns for state management, application routing & optimized component rendering. It was definitely a refresher compared to React.",
    otherProjects: [
      { name: "OctoList Github Project", link: "/project/github" },
      {
        name: "Anime Webpage",
        link: "/project/anime",
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
    github: "https://github.com/abayomi1196/netflix-clone",
    summary:
      "My attempt at cloning the popular streaming service. built primarily to master basic to intermediate React topics, also an introduction to Firebase. You can unfortunately only watch one video :)",
    implementation:
      "Built with React, Styled using the popular CSS in JS library - Styled Components, also has a static backend implemented with Firebase.",
    lessonsLearned:
      "Proper project architecture and file naming patterns for a medium sized react project that would improve efficiency, readability, & scalability",
    otherProjects: [
      { name: "Movie Search App", link: "/project/movie-app" },
      {
        name: "OctoList Github Project",
        link: "/project/github",
      },
    ],
  },
];
