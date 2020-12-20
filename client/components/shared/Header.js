import React, {useState} from 'react';
import Link from 'next/link';
import Typography from '../shared/Typography';
import Footer from '../shared/Footer';

import styles from '../../styles/components/shared/Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${open ? `` : `bg-opacity-95`}`}>
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
            <Typography variant="menu">
              <Link href="/">Foundation</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Typography variant="menu">
              <Link href="/academie">Academie</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Typography variant="menu">
              <Link href="/methodology">Methodology</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Typography variant="menu">
              <Link href="/admissions">Admission</Link>
            </Typography>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Typography variant="menu" className={`text-blueOne`}>
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
