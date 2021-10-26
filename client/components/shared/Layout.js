import React, {useEffect, useRef, useContext} from 'react';
import Head from './HeadMeta';
import Header from './Header';
import Sidebar from './Sidebar';
import ThemeSwitcher from './ThemeSwitcher';
import Link from 'next/link';
import {useRouter} from 'next/router';
import ThemeContext from './ThemeContext';

import Typography from './Typography';

import styles from '../../styles/components/shared/Layout.module.css';
import styles2 from '../../styles/components/Home/HomeHero.module.css';

const Layout = ({children, title}) => {
  const router = useRouter();
  const {theme} = useContext(ThemeContext);
  const ref = useRef(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [router.pathname]);

  return (
    <>
      <Head title={title} />
      <div
        className={`${styles.container} bg-white dark:text-white text-darkMatter dark:bg-darkMatter`}
      >
        <Header classes={styles.header} />
        <div className={styles.logo}>
          <Link href={`/`} passHref>
            <button className={`w-full h-full focus:outline-none`}>
              <img
                type="image/svg+xml"
                src={
                  theme === 'dark'
                    ? '/icons/logo_white3.png'
                    : '/icons/logo_new2.png'
                }
                alt="logo"
                width="100%"
                height="100%"
              />
            </button>
          </Link>
        </div>
        <div className={styles.darkModeIcon}>
          <ThemeSwitcher />
        </div>
        <Sidebar classes={styles.sidebar} />
        <main ref={ref} className={styles.main}>
          {router.pathname === '/' ?
          <div className={`relative text-center`}>
            <div className={styles2.leftText}>
              <Typography variant={'h2'}>{"Code your\n future"}</Typography>
              <Typography variant={'h4'}>{"Start IT career"}</Typography>
          </div>
            <img src={'https://angry-northcutt-c85a37.netlify.app/images/academie_one_KV_desktop.png'} alt="wtf"/> 
          </div>
          : ''}
          <div
            className={`${styles.content} ${
              router.pathname === '/' ? '' : 'py-20'
            }`}
          >
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
