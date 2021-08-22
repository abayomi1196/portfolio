import Head from 'next/head';

const SEO = () => (
  <Head>
    <title>Abayomi Ayodele | Frontend/React Developer</title>
    <meta
      name="description"
      content="I am a Frontend (React) developer, with growing experience in Modern Web Development. I am particularly interested in client-side web development."
    />
    <meta name="author" content="Abayomi Ayodele" />

    {/* Open Graph SEO */}
    <meta
      property="og:title"
      content="Abayomi Ayodele | Frontend/React Developer"
      key="ogtitle"
    />
    <meta
      property="og:description"
      content="I am a Frontend (React) developer, with growing experience in Modern Web Development. I am particularly interested in client-side web development."
      key="ogdesc"
    />
    <meta
      property="og:url"
      content="https://portfolio-ayodele.vercel.app/"
      key="ogurl"
    />
    <meta property="og-locale" content="en-NG" />
    <meta property="og-type" content="website" />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/ayo-clodinary/image/upload/v1629665194/78866624_y7yqv0.jpg"
      key="ogimage"
    />
    <meta property="og:site_name" content="Abayomi Ayodele" key="ogsitename" />
    {/* End of Open Graph SEO */}

    {/* Twitter SEO */}
    <meta name="twitter:card" content="summary" />

    <meta name="twitter:site" content="@sirkamara" />

    <meta
      name="twitter:title"
      content="Abayomi Ayodele | Frontend/React Developer"
    />

    <meta
      name="twitter:description"
      content="I am a Frontend (React) developer, with growing experience in Modern Web Development."
    />

    <meta
      name="twitter:image"
      content="https://res.cloudinary.com/ayo-clodinary/image/upload/v1629665194/78866624_y7yqv0.jpg"
    />

    <meta
      name="twitter:image:alt"
      content="Bojack Horseman. I love that show."
    />
    {/* End of Twitter SEO */}

    <link rel="icon" href="/icon.png" />
  </Head>
);

export default SEO;
