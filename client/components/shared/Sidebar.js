import React, {memo} from 'react';
import styles from '../../styles/components/shared/Sidebar.module.css';
import Link from 'next/link';

const Sidebar = ({classes}) => {
  return (
    <aside className={classes}>
      <nav className={`${styles.nav} ${styles.pulsate}`}>
        <ul className="navbar--link">
          <li className={styles.navbarLinkItem}>
            <Link href="/">academie one</Link>
          </li>
          <li className={styles.navbarLinkItem}>
            <Link href="/foundation">foundation</Link>
          </li>
          <li className={styles.navbarLinkItem}>
            <Link href="/academie">academie</Link>
          </li>
          <li className={styles.navbarLinkItem}>
            <Link href="/methodology">methodology</Link>
          </li>
          <li className={styles.navbarLinkItem}>
            <Link href="/admissions">admission</Link>
          </li>
          <li className={styles.navbarLinkItem}>
            <Link href="/coming-soon">apply</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default memo(Sidebar);
