import React, {useEffect, useRef} from 'react';
import Head from './HeadMeta';
import Header from './Header';
import Sidebar from './Sidebar';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from '../../styles/components/shared/Layout.module.css';

const Layout = ({children, title}) => {
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [router.pathname]);

  return (
    <>
      <Head title={title} />
      <Header classes={styles.header} />
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href={`/`} passHref>
            <button>
              <img src="/icons/logo.png" alt="logo" />
            </button>
          </Link>
        </div>
        <Sidebar classes={styles.sidebar} />
        <main ref={ref} className={styles.main}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
