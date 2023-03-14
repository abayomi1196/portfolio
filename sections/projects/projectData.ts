export type projectType = {
  title: string;
  image: string;
  stack: string[];
  url: string;
  github?: string;
  summary: string;
};

export const projects: projectType[] = [
  {
    title: "React CreditCard Validator",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1655150835/rccf_umnxto.png",
    stack: ["React", "Typescript"],
    url: "https://www.npmjs.com/package/react-creditcard-validator",
    github: "https://github.com/abayomi1196/react-creditcard-validator",
    summary:
      "A React Custom Hook to provide validation and formatting for payment card input fields. Written completely in TypeScript."
  },

  {
    title: "MailHelpa",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1678771199/Screenshot_2023-03-14_at_06.15.23_njl9ro.png",
    stack: ["React", "Typescript"],
    url: "https://mailhelpa.com/",
    summary:
      "MailHelpa was built to give developers the power to send bulk mail quickly. Allowing custom user lists, server setup, and template creation."
  },

  {
    title: "Pneumapage",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1678771570/Screenshot_2023-03-14_at_06.26.01_liqhpi.png",
    stack: ["NextJS", "Typescript", "Algolia"],
    url: "https://www.pneumapage.com/",
    summary:
      "A provider marketplace where prospective patients can shop/search for healthcare providers based on their patient traction and average ratings using NextJS, Typescript, and Styled Components."
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
  }
];
