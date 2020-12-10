import React, {memo} from 'react';
import styles from '../../styles/components/shared/Sidebar.module.css';
import Link from 'next/link';

const Sidebar = ({classes}) => {
  return (
    <aside className={classes}>
      <nav className={`${styles.nav} ${styles.pulsate}`}>
        <ul className="navbar--link">
          <li className="navbar--link-item">
            <Link href="/">academie one</Link>
          </li>
          <li className="navbar--link-item">
            <Link href="/foundation">Foundation</Link>
          </li>
          <li className="navbar--link-item">
            <Link href="/academie">Academie</Link>
          </li>
          <li className="navbar--link-item">
            <Link href="/methodology">Methodology</Link>
          </li>
          <li className="navbar--link-item">
            <Link href="/admissions">Admission</Link>
          </li>
          <li className="navbar--link-item">
            <Link href="/coming-soon">Apply</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default memo(Sidebar);
