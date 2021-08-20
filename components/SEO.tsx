import Head from 'next/Head';

const SEO = () => (
  <Head>
    <title>Abayomi Ayodele</title>
    <meta
      name="description"
      content="Abayomi Ayodele Portolio. React, Next, Node Developer"
    />

    {/* site title */}
    <meta property="og:title" content="Abayomi Ayodele" key="ogtitle" />

    {/* site desc */}
    <meta
      property="og:description"
      content="Abayomi Ayodele Portolio. React, Next, Node Developer"
      key="ogdesc"
    />

    {/* seo url */}
    <meta
      property="og:url"
      content="https://portfolio-ayodele.vercel.app/"
      key="ogurl"
    />

    {/* seo img */}
    <meta property="og:image" content="/horse.jpg" key="ogimage" />

    {/* seo site_name */}
    <meta property="og:site_name" content="Abayomi Ayodele" key="ogsitename" />

    {/* site logo */}
    <link rel="icon" href="/icon.png" />
  </Head>
);

export default SEO;
