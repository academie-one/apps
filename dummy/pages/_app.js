import Layout from '../components/shared/Layout';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <Layout title={'academie one'}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
