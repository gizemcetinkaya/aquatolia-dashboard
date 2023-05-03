import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

import Layout from './Layout';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
