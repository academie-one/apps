import React, {useState, useEffect} from 'react';
import ThemeContext from '../components/shared/ThemeContext';
import Layout from '../components/shared/Layout';
import '../styles/globals.css';
import Router from "next/router";


//  function ym() {
//   return (
//     "<script src='https://mc.yandex.ru/metrika/watch.js' type='text/javascript'></script>\
//     <script type='text/javascript'>\
//           try {\
//                 var yaCounterXXXXX = new Ya.Metrika({\
//                 id:72873511,\
//                 clickmap:true,\
//                 trackLinks:true,\
//                 accurateTrackBounce:true,\
//                 webvisor:true,\
//                 trackHash:true\
//                 });\
//           } catch(e) { }\
//     </script>"
//   );
// }

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('269170401585750');
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

const MyApp = ({Component, pageProps}) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('html').classList.add('dark');
      setTheme('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Layout title={'academie one'}>
          <Component {...pageProps} />
          <FacebookPixel />
          {/* <div dangerouslySetInnerHTML={{__html: ym()}}/> */}
      
        </Layout>
      </ThemeContext.Provider>
    </>
  );
};

export default MyApp;