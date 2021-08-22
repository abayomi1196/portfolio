import Head from 'next/head';

const SEO = () => (
  <Head>
    <title>Abayomi Ayodele | Frontend Developer &amp; NBA Enthusiast</title>
    <meta name="description" content="Frontend/React Developer" />

    {/* Open Graph SEO */}
    <meta
      property="og:title"
      content="Abayomi Ayodele | Frontend Developer &amp; NBA Enthusiast"
      key="ogtitle"
    />
    <meta
      property="og:description"
      content="Frontend/React Developer"
      key="ogdesc"
    />
    <meta
      property="og:url"
      content="https://portfolio-ayodele.vercel.app/"
      key="ogurl"
    />
    <meta property="og-locale" content="en-NG" />
    <meta property="og-type" content="website" />
    <meta property="og:image" content="/horse.jpg" key="ogimage" />
    <meta property="og:site_name" content="Abayomi Ayodele" key="ogsitename" />
    {/* End of Open Graph SEO */}

    {/* Twitter SEO */}
    <meta name="twitter:card" content="/horse.jpg" />
    <meta name="twitter:site" content="Abayomi Ayodele" />
    <meta
      name="twitter:domain"
      content="https://portfolio-ayodele.vercel.app/"
    />
    <meta
      name="twitter:title"
      content="Abayomi Ayodele | Frontend Developer &amp; NBA Enthusiast"
    />

    <meta name="twitter:description" content="Frontend/React Developer" />

    <meta name="twitter:image" content="/horse.jpg" />

    <meta name="twitter:url" content="https://portfolio-ayodele.vercel.app/" />
    {/* End of Twitter SEO */}

    <link rel="icon" href="/icon.png" />
  </Head>
);

export default SEO;
