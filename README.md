This page was built with [Next.js](https://nextjs.org/), [Typescript](https://www.typescriptlang.org/docs/), [TailwindCSS](tailwindcss.com/), & [Twin.Macro](https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components). It was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# [Portfolio Site](https://portfolio-ayodele.vercel.app/)

![](https://res.cloudinary.com/ayo-clodinary/image/upload/v1634374620/portfolio_nhw1fr.png)

Build setup:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Project Architecture

```
  ┣ components
  ┣ pages
  ┃ ┣ project
  ┃ ┃ ┗ singleProject.tsx
  ┃ ┣ _app.tsx
  ┃ ┣ _document.tsx
  ┃ ┗ index.tsx
  ┣ public
  ┣ sections
  ┃ ┣ about
  ┃ ┣ footer
  ┃ ┣ navigation
  ┃ ┗ projects
  ┣ styles
  ┗ utils
```


### Description of each folder is given below:

- `components`: reusable UI or functional components are defined here and reused accross the project as needed. 

- `pages`: NextJS config files are prefixed with an underscore i.e `_document.tsx`. It also contains other user-defined pages whose names and folder structure correspond to specific page routes. The structure would resemble the following: 
    
      pages
          ┣ project
          ┃ ┗ [slug].tsx
          ┗ _app.tsx

- `public`: contain static assets i.e images, logo etc.

- `sections`: Stateless UI sections. The pages are broken up into sections which may contain as many low level components as needed. Each section would have a folder in which the `.tsx` file and the `.styled.ts` file would be, encapsulating the styles needed for that specific UI section. The folder structure is as follows:

        about
          ┣ About.tsx
          ┗ About.styled.ts

- `styles`: contains files for global and specific page styles:

- `utils`: reusable utility functions

**NOTE**: Both the sections & components directories have a file called `index.ts` that allows exporting the content of same directory to other root level directories using absolute imports.



