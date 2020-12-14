import React, {memo} from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/shared/Sidebar.module.css';
import Link from 'next/link';

const Sidebar = ({classes}) => {
  return (
    <aside className={classes}>
      <nav className={`${styles.nav}`} />
      <ul className={`${styles.navUlLinks}`}>
        <li className={styles.navbarLinkItem}>
          <Typography variant="menu">
            <Link href="/">foundation</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography variant="menu">
            <Link href="/academie">academie</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography variant="menu">
            <Link href="/methodology">methodology</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography variant="menu">
            <Link href="/admissions">admissions</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography variant="menu" color="blue">
            <Link href="/coming-soon">apply</Link>
          </Typography>
        </li>
      </ul>
      <div className={`${styles.navFooterLinks}`}>
        <Typography variant="footer">
          <Link href="/coming-soon">Contact</Link>
          &nbsp;&nbsp;&nbsp;
          <Link href="/coming-soon">FAQ</Link>
        </Typography>
        <div className={`flex`}>
          <img className={`m-2`} rel="icon" src="/icons/001-telegram.png" />
          <img className={`m-2`} rel="icon" src="/icons/002-instagram.png" />
          <img className={`m-2`} rel="icon" src="/icons/003-facebook.png" />
          <img className={`m-2`} rel="icon" src="/icons/004-youtube.png" />
        </div>
        <Typography variant="footer">
          Copyright © 2020 <br />
          Academie One
        </Typography>
        <br />
        <Typography variant="footer">
          <Link href="/coming-soon">
            <u>Terms & Conditions</u>
          </Link>
        </Typography>
      </div>
    </aside>
  );
};

export default memo(Sidebar);
