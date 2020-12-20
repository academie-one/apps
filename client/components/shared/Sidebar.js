import React, {memo} from 'react';
import Typography from './Typography';
import Footer from './Footer';
import styles from '../../styles/components/shared/Sidebar.module.css';
import Link from 'next/link';
import {useRouter} from 'next/router';

// TODO: Active links bold
// TODO: Apply triggers gloving
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
        className={`${styles.nav}`}
      />
      <ul className={`${styles.navUlLinks}`}>
        <li className={styles.navbarLinkItem}>
          <Typography
            style={currentPage === '/' ? highlightCurrentPage : {}}
            variant="menu"
          >
            <Link href="/">foundation</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography
            style={currentPage === '/academie' ? highlightCurrentPage : {}}
            variant="menu"
          >
            <Link href="/academie">academie</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography
            style={currentPage === '/methodology' ? highlightCurrentPage : {}}
            variant="menu"
          >
            <Link href="/methodology">methodology</Link>
          </Typography>
        </li>
        <li className={styles.navbarLinkItem}>
          <Typography
            style={currentPage === '/admissions' ? highlightCurrentPage : {}}
            variant="menu"
          >
            <Link href="/admissions">admissions</Link>
          </Typography>
        </li>
        <li
          onMouseLeave={() => setGlowing(false)}
          onMouseOver={() => setGlowing(true)}
          className={styles.navbarLinkItem}
        >
          <Typography
            style={currentPage === '/coming-soon' ? highlightCurrentPage : {}}
            color="blue"
            variant="menu"
          >
            <Link href="/coming-soon">apply</Link>
          </Typography>
        </li>
      </ul>
      <Footer />
    </aside>
  );
};

export default memo(Sidebar);
