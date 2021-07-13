import 'tailwindcss/tailwind.css';
import Layout from '../comps/Layout'

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
const cache = createCache({ key: 'css' });
cache.compat = true;

import "/styles/index.css";
import './../styles/styles.css';
import '../dist/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
