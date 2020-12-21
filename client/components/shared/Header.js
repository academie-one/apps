import React, {useState} from 'react';
import Link from 'next/link';
import Typography from '../shared/Typography';
import Footer from '../shared/Footer';
import {useRouter} from 'next/router';

import styles from '../../styles/components/shared/Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const currentPage = router.route;

  const highlightCurrentPage = {
    textDecoration: 'underline',
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.nav} bg-darkMatterDarker ${
          open ? `bg-opacity-100` : `bg-opacity-90`
        }`}
      >
        <div className={styles.navContent}>
          <Link href="/" passHref>
            <button className={`w-40 h-10`}>
              <img
                type="image/svg+xml"
                src="/icons/logo_white_blue.svg"
                alt="logo"
                width="100%"
              />
            </button>
          </Link>
          <button
            className={`${styles.hamburger} ${open && styles.open}`}
            type="button"
            onClick={handleClick}
          >
            <span className={styles.hamburgerTopBun}></span>
            <span className={styles.hamburgerBottomBun}></span>
          </button>
        </div>
        <ul className={`${styles.menu} ${open ? 'flex' : 'hidden'}`}>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Typography
              variant="menu"
              style={currentPage === '/' ? highlightCurrentPage : {}}
            >
              <Link href="/">Foundation</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Typography
              variant="menu"
              style={currentPage === '/academie' ? highlightCurrentPage : {}}
            >
              <Link href="/academie">Academie</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Typography
              variant="menu"
              style={currentPage === '/methodology' ? highlightCurrentPage : {}}
            >
              <Link href="/methodology">Methodology</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Typography
              variant="menu"
              style={currentPage === '/admissions' ? highlightCurrentPage : {}}
            >
              <Link href="/admissions">Admission</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Typography
              variant="menu"
              className={`text-blueOne`}
              style={currentPage === '/coming-soon' ? highlightCurrentPage : {}}
            >
              <Link href="/coming-soon">Apply</Link>
            </Typography>
          </li>
          <Footer propsClick={handleClick} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
