import React, {useState} from 'react';
import Link from 'next/link';

import styles from '../../styles/components/shared/Header.module.css';

const Header = ({classes}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className={classes}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={``}>
            <Link href="/">
              <h1 className="py-1 text-lg font-bold no-underline">
                academie one
              </h1>
            </Link>
          </div>
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
            <Link href="/foundation">Foundation</Link>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Link href="/academie">Academie</Link>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Link href="/methodology">Methodology</Link>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Link href="/admissions">Admission</Link>
          </li>
          <li className={styles.navbarLinkItem} onClick={handleClick}>
            <Link href="/coming-soon">Apply</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
