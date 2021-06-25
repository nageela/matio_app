import 'tailwindcss/tailwind.css';
import Layout from '../comps/Layout'
import "/styles/index.css";
import './../styles/styles.css';
import '../dist/index.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  
}

export default MyApp
 