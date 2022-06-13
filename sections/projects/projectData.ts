export type projectType = {
  title: string;
  image: string;
  stack: string[];
  url: string;
  github: string;
  summary: string;
};

export const projects: projectType[] = [
  {
    title: "Spotify Purify Playlists",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1654809163/purify-playlists_cw3hw5.png",
    stack: ["React", "Typescript", "Express"],
    url: "https://playlist-purify.herokuapp.com/",
    github: "https://github.com/abayomi1196/Clean-playlists",
    summary:
      "Purify your explicit Spotify playlists - creates new non-explicit playlists based on existing explicit ones "
  },

  {
    title: "Anime Webpage",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1638645637/anime-webpage_rw9dat.png",
    stack: ["NextJS", "GraphQL"],
    url: "https://anime-webpage.vercel.app/",
    github: "https://github.com/abayomi1196/anime-webpage",
    summary:
      "Users can view all popular animes, search for their favorite, also access each anime's character list and other related media as well."
  },

  {
    title: "OctoList Github Project",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1638645597/octo-list_q7cafi.png",
    stack: ["React", "Typescript", "GraphQL"],
    url: "https://octo-list.netlify.app/",
    github: "https://github.com/abayomi1196/github-graphql-app",
    summary:
      "Web application built on the Github GraphQL API, allows users to search for a username, and view some brief details about a GitHub profile."
  },

  {
    title: "React CreditCard Validator",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1655150835/rccf_umnxto.png",
    stack: ["React", "Typescript"],
    url: "https://www.npmjs.com/package/react-creditcard-validator",
    github: "https://github.com/abayomi1196/react-creditcard-validator",
    summary:
      "A React Custom Hook to provide validation and formatting for payment card input fields. Written completely in TypeScript."
  }
];
