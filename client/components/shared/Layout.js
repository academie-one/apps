import React, {useEffect, useRef, useContext} from 'react';
import Head from './HeadMeta';
import Header from './Header';
import Sidebar from './Sidebar';
import ThemeSwitcher from './ThemeSwitcher';
import Link from 'next/link';
import {useRouter} from 'next/router';
import ThemeContext from './ThemeContext';

import styles from '../../styles/components/shared/Layout.module.css';

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
            <button className={`w-full h-full`}>
              <img
                type="image/svg+xml"
                src={
                  theme === 'dark'
                    ? '/icons/logo_white_blue.svg'
                    : '/icons/logo_black.svg'
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
          <div className={styles.content}>{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
