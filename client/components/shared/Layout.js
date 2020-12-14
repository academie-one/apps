import Head from './HeadMeta';
import Header from './Header';
import Sidebar from './Sidebar';
import Link from 'next/link';

import styles from '../../styles/components/shared/Layout.module.css';

const Layout = ({children, title}) => {
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
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
