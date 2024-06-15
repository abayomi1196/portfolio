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
    title: "North | Online consultations",
    image:
      "https://res.cloudinary.com/ayo-clodinary/image/upload/v1718489820/Screenshot_2024-06-15_at_23.16.41_tloyzt.png",
    stack: ["React-Native", "Typescript", "Open AI"],
    url: "https://play.google.com/store/apps/details?id=com.pneumacare.north&hl=en_GB",
    summary:
      "Mobile application powering patient consultations (a live chat system), medications purchase, and quick doctor questions/answers, among others."
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
      "A provider marketplace where prospective patients can shop/search for healthcare providers based on their patient traction and average ratings."
  }
];
