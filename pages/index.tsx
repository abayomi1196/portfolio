import type { NextPage } from 'next';
import 'twin.macro';

import { About, Projects, Layout } from 'sections';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div id="about">
          <About />
        </div>

        <div id="projects">
          <Projects />
        </div>
      </Layout>
    </>
  );
};

export default Home;
