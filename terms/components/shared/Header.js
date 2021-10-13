import React, {useState} from 'react';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

import styles from '../../styles/components/shared/Header.module.css';

const Header = ({darkMode, setDarkMode}) => {
  const [open, setOpen] = useState(false);

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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
