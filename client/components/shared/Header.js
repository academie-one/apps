import React, {useState} from 'react';
import Link from 'next/link';
import Typography from './Typography';
import DarkModeToggle from './DarkModeToggle';
import Footer from './Footer';
import {useRouter} from 'next/router';

import styles from '../../styles/components/shared/Header.module.css';

const Header = ({darkMode, setDarkMode}) => {
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
        className={`${styles.nav} dark:bg-darkMatterDarker bg-white ${
          open ? `bg-opacity-100` : `bg-opacity-90`
        }`}
      >
        <div className={styles.navContent}>
          <Link href="/" passHref>
            <button className={`w-20 h-12`}>
              <img
                type="image/svg+xml"
                src={darkMode ? '/icons/main.svg' : '/icons/main_inverse.svg'}
                alt="logo"
                width="100%"
              />
            </button>
          </Link>
          <div className={styles.navRight}>
            <DarkModeToggle
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              navOpen={open}
            />
            <button
              className={`${styles.hamburger} ${open && styles.open} ml-4`}
              type="button"
              onClick={handleClick}
            >
              <span
                className={`${styles.hamburgerTopBun} bg-darkMatter dark:bg-white`}
              ></span>
              <span
                className={`${styles.hamburgerBottomBun} bg-darkMatter dark:bg-white`}
              ></span>
            </button>
          </div>
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
              color={'blue'}
              style={currentPage === '/coming-soon' ? highlightCurrentPage : {}}
            >
              <Link href="/coming-soon">Apply</Link>
            </Typography>
          </li>
          <Footer propsClick={handleClick} darkMode={darkMode} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
