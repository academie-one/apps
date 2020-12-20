import Typography from './Typography';
import Link from 'next/link';
import styles from '../../styles/components/shared/Footer.module.css';

const Footer = () => {
  return (
    <div className={`${styles.navFooterLinks}`}>
      <Typography variant="body">
        <Link href="/coming-soon">Contact</Link>
        &nbsp;&nbsp;&nbsp;
        <Link href="/faq">FAQ</Link>
      </Typography>
      <div className={`flex flex-row`}>
        <img className={`m-2`} rel="icon" src="/icons/001-telegram.png" />
        <img className={`m-2`} rel="icon" src="/icons/002-instagram.png" />
        <img className={`m-2`} rel="icon" src="/icons/003-facebook.png" />
        <img className={`m-2`} rel="icon" src="/icons/004-youtube.png" />
      </div>
      <Typography variant="footer">Copyright © 2020 Academie One</Typography>
      <Typography variant="footer" className={`pt-8`}>
        <Link href="/terms">Terms & Conditions</Link>
      </Typography>
    </div>
  );
};

export default Footer;
