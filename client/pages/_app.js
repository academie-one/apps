import React, {useState, useEffect} from 'react';
import ThemeContext from '../components/shared/ThemeContext';
import Layout from '../components/shared/Layout';
import '../styles/globals.css';

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
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Layout title={'academie one'}>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
};

export default MyApp;
