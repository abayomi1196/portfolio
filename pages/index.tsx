import type { NextPage } from 'next';
import 'twin.macro';

import Layout from 'sections/Layout';
import { About } from 'sections';

const Home: NextPage = () => {
  return (
    <Layout>
      <div id="about">
        <About />
      </div>
    </Layout>
  );
};

export default Home;
