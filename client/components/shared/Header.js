import React, {useState, useContext} from 'react';
import Link from 'next/link';
import Typography from './Typography';
import ThemeContext from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import Footer from './Footer';
import {useRouter} from 'next/router';

import styles from '../../styles/components/shared/Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const {theme} = useContext(ThemeContext);
  const router = useRouter();
  const currentPage = router.route;

  const highlightCurrentPage = {
    textDecoration: 'underline',
  };

  const handleClick = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.nav} dark:bg-darkMatterDarker bg-white ${
          open ? `bg-opacity-100` : `bg-opacity-90`
        }`}
      >
        <div className={styles.navContent}>
          <Link href="/" passHref>
            <button
              className={`w-20 h-12 focus:outline-none`}
              onClick={handleClick}
            >
              <img
                type="image/svg+xml"
                src={
                  theme === 'dark'
                    ? '/icons/main.svg'
                    : '/icons/main_inverse.svg'
                }
                alt="logo"
                width="100%"
              />
            </button>
          </Link>
          <div className={styles.navRight}>
            <ThemeSwitcher navOpen={open} />
            <button
              className={`${styles.hamburger} ${open && styles.open} ml-4`}
              type="button"
              onClick={handleOpen}
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
              style={currentPage === '/academie' ? highlightCurrentPage : {}}
            >
              <Link href="/academie">Academie</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Typography
              variant="menu"
              style={currentPage === '/journey' ? highlightCurrentPage : {}}
            >
              <Link href="/journey">Journey</Link>
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
              style={currentPage === '/foundation' ? highlightCurrentPage : {}}
            >
              <Link href="/foundation">Foundation</Link>
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
          <Footer propsClick={handleClick} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
