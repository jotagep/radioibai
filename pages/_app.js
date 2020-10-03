import '../styles/globals.css'
import Seo from '../components/Seo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
