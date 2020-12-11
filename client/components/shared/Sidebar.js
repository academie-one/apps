import React, {memo} from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/shared/Sidebar.module.css';
import Link from 'next/link';

const Sidebar = ({classes}) => {
  return (
    <aside className={classes}>
      <nav className={`${styles.nav} ${styles.pulsate}`}>
        <ul className="navbar--link">
          <li className={styles.navbarLinkItem}>
            <Link href="/">
              <Typography variant="nav">academie one</Typography>
            </Link>
          </li>
          <li className={styles.navbarLinkItem}>
            <Link href="/foundation">
              <Typography variant="nav">foundation</Typography>
            </Link>
          </li>
          <li className={styles.navbarLinkItem}>
            <Link href="/academie">
              <Typography variant="nav">academie</Typography>
            </Link>
          </li>
          <li className={styles.navbarLinkItem}>
            <Link href="/methodology">
              <Typography variant="nav">methodology</Typography>
            </Link>
          </li>
          <li className={styles.navbarLinkItem}>
            <Link href="/admissions">
              <Typography variant="nav">admissions</Typography>
            </Link>
          </li>
          <li className={styles.navbarLinkItem}>
            <Link href="/coming-soon">
              <Typography variant="nav" color="blue">
                apply
              </Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default memo(Sidebar);
