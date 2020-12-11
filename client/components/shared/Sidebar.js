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
            <Typography variant="nav">
              <Link href="/">academie one</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem}>
            <Typography variant="nav">
              <Link href="/foundation">foundation</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem}>
            <Typography variant="nav">
              <Link href="/academie">academie</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem}>
            <Typography variant="nav">
              <Link href="/methodology">methodology</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem}>
            <Typography variant="nav">
              <Link href="/admissions">admissions</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem}>
            <Typography variant="nav" color="blue">
              <Link href="/coming-soon">apply</Link>
            </Typography>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default memo(Sidebar);
