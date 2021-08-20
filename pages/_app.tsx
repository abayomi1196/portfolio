import GlobalStyles from 'styles/GlobalStyles';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
