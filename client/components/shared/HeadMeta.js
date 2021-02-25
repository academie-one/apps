import Head from 'next/head';
import FACEBOOK_PIXEL from '../Metrika/pixel'


const HeadMeta = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
      <title>Academie One: Education, Career and Guaranteed Employment in IT</title>
      <meta name="title" content="Academie One: Education, Career and Guaranteed Employment in IT" />
      <meta name="description" content="Welcome to Academie One - the modern training system for programming and career development in IT. The Academy is welcoming anyone from 18 to 42. Every can change the future – be One." />

      
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.academie.one/" />
      <meta property="og:title" content="Academie One: Education, Career and Guaranteed Employment in IT" />
      <meta property="og:description" content="Welcome to Academie One - the modern training system for programming and career development in IT. The Academy is welcoming anyone from 18 to 42. Every can change the future – be One." />
      <meta property="og:image" content="" />

      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.academie.one/" />
      <meta property="twitter:title" content="Academie One: Education, Career and Guaranteed Employment in IT" />
      <meta property="twitter:description" content="Welcome to Academie One - the modern training system for programming and career development in IT. The Academy is welcoming anyone from 18 to 42. Every can change the future – be One." />
      <meta property="twitter:image" content=""></meta>
      <FACEBOOK_PIXEL />
      <link rel="icon" href="/icons/circle.svg" />
    </Head>
  );
};

export default HeadMeta;
