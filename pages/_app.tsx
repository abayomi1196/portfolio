import GlobalStyles from 'styles/GlobalStyles';
import type { AppProps } from 'next/app';

import { SEO } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
