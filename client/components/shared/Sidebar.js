import React, {memo} from 'react';
import Typography from './Typography';
import Footer from './Footer';
import styles from '../../styles/components/shared/Sidebar.module.css';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Sidebar = ({classes}) => {
  const [glowing, setGlowing] = React.useState(false);
  const router = useRouter();

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

  const currentPage = router.route;

  return (
    <aside className={classes}>
      <nav
        style={glowing ? applyHovered : applyUnhovered}
        className={`${styles.nav} bg-white dark:bg-black`}
      />
      <ul className={`${styles.navUlLinks}`}>
        <li className={styles.navbarLinkItem}>
          <Typography
            style={currentPage === '/academie' ? highlightCurrentPage : {}}
            variant="menu"
          >
            <Link href="/academie">Academie</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography
            style={currentPage === '/journey' ? highlightCurrentPage : {}}
            variant="menu"
          >
            <Link href="/journey"> Journey</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography
            style={currentPage === '/admissions' ? highlightCurrentPage : {}}
            variant="menu"
          >
            <Link href="/admissions"> Admissions</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography
            style={currentPage === '/foundation' ? highlightCurrentPage : {}}
            variant="menu"
          >
            <Link href="/foundation">Foundation</Link>
          </Typography>
        </li>
        <li
          onMouseLeave={() => setGlowing(false)}
          onMouseOver={() => setGlowing(true)}
          className={styles.navbarLinkItem}
        >
          <Typography
            style={currentPage === '/coming-soon' ? highlightCurrentPage : {}}
            variant="menu"
            className={`text-darkMatter font-normal dark:text-blueOne`}
          >
            <Link href="/coming-soon">Apply</Link>
          </Typography>
        </li>
      </ul>
      <Footer />
    </aside>
  );
};

export default memo(Sidebar);
