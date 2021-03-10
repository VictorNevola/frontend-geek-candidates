import GlobalStyles from '../styles/global';

import Head from 'next/head';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Geek Candidatos</title>
        <meta name="description" content="Geek Candidatos" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <Header />

      <Component {...pageProps} />

    </>)
}

export default MyApp
