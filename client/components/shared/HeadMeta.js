import Head from 'next/head';

const HeadMeta = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
      <title>Academie One: education and guaranteed employment in IT</title>
      <meta name="title" content="Academie One: education and guaranteed employment in IT" />
      <meta name="description" content="The modern training system for programming and career development in IT. We are welcoming anyone from 18 to 42. Everyone can change the future – be One." />

      
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.academie.one/" />
      <meta property="og:title" content="Academie One: education and guaranteed employment in IT" />
      <meta property="og:description" content="The modern training system for programming and career development in IT. We are welcoming anyone from 18 to 42. Everyone can change the future – be One." />
      <meta property="og:image" content="" />

      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.academie.one/" />
      <meta property="twitter:title" content="Academie One: education and guaranteed employment in IT" />
      <meta property="twitter:description" content="The modern training system for programming and career development in IT. We are welcoming anyone from 18 to 42. Everyone can change the future – be One." />
      <meta property="twitter:image" content=""></meta>
      <link rel="icon" href="/icons/circle.svg" />
    </Head>
  );
};

export default HeadMeta;
