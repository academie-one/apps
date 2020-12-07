import Head from "next/head";

const Header = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/*<link rel="icon" href="/favicon.ico" />*/}
    </Head>
  );
};

export default Header;
