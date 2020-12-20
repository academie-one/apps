import React, { memo } from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/shared/Sidebar.module.css';
import Link from 'next/link';

// TODO: Active links bold
// TODO: Apply triggers gloving
const Sidebar = ({ classes }) => {
  const [glowing, setGlowing] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("foundation");

  const applyHovered = {
    boxShadow: '0px 0px 300px rgba(195, 218, 231, 1)',
    transition: 'box-shadow 0.5s ease-in-out',
  };
  const applyUnhovered = {
    transition: 'box-shadow 0.5s ease-in-out',
  };
  const highlightCurrentPage = {
    textDecoration: 'underline',
  };
  return (
    <aside className={classes}>
      <nav
        style={glowing ? applyHovered : applyUnhovered}
        className={`${styles.nav}`}
      />
      <ul className={`${styles.navUlLinks}`}>
        <li className={styles.navbarLinkItem}>
          <Typography
            onClick={() => setCurrentPage("foundation")}
            style={currentPage == "foundation" ? highlightCurrentPage : {}} variant="menu">
            <Link
              href="/">foundation</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography
            onClick={() => setCurrentPage("academie")}
            style={currentPage == "academie" ? highlightCurrentPage : {}} variant="menu">
            <Link href="/academie">academie</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography
            onClick={() => setCurrentPage("methodology")}
            style={currentPage == "methodology" ? highlightCurrentPage : {}} variant="menu">
            <Link href="/methodology">methodology</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography
            onClick={() => setCurrentPage("admissions")}
            style={currentPage == "admissions" ? highlightCurrentPage : {}} variant="menu">
            <Link href="/admissions">admissions</Link>
          </Typography>
        </li>
        <li
          onMouseLeave={() => setGlowing(false)}
          onMouseOver={() => setGlowing(true)}
          className={styles.navbarLinkItem}
        >
          <Typography
            onClick={() => setCurrentPage("apply")}
            style={currentPage == "apply" ? highlightCurrentPage : {}} color="blue" variant="menu">
            <Link href="/coming-soon">apply</Link>
          </Typography>
        </li>
      </ul>
      <div className={`${styles.navFooterLinks}`}>
        <Typography
          onClick={() => setCurrentPage("contact")} variant="footer">
          <Link href="/coming-soon">Contact</Link>
          &nbsp;&nbsp;&nbsp;
      <Link href="/faq">FAQ</Link>
        </Typography>
        {/* <div className={`flex-shrink-0`}> */}
        {/*   <img className={`m-2`} rel="icon" src="/icons/001-telegram.png" /> */}
        {/*   <img className={`m-2`} rel="icon" src="/icons/002-instagram.png" /> */}
        {/*   <img className={`m-2`} rel="icon" src="/icons/003-facebook.png" /> */}
        {/*   <img className={`m-2`} rel="icon" src="/icons/004-youtube.png" /> */}
        {/* </div> */}
        <Typography variant="footer">
          Copyright © 2020
          Academie One
        </Typography>

        <Typography
          onClick={() => setCurrentPage("terms")}
          variant="footer">
          <Link href="/terms">
            Terms & Conditions
          </Link>
        </Typography>
      </div >
    </aside >
  );
};

export default memo(Sidebar);
