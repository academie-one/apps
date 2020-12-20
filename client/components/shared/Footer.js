import Typography from './Typography';
import Link from 'next/link';
import styles from '../../styles/components/shared/Footer.module.css';

const Footer = ({ propsClick }) => {

  const handleClick = () => {
    if (propsClick) {
      propsClick();
    }
  }

  return (
    <div className={`${styles.navFooterLinks}`}>
      <div className={`flex flex-row space-x-2`}>
        <Typography variant="footer" onClick={handleClick}>
          <Link href="/coming-soon">Contact</Link>
        </Typography>
        <Typography variant="footer" onClick={handleClick}>
          <Link href="/faq">FAQ</Link>
        </Typography>
      </div>

      <div className={`flex flex-row`}>
        <img className={`m-2`} rel="icon" src="/icons/001-telegram.png" />
        <img className={`m-2`} rel="icon" src="/icons/002-instagram.png" />
        <img className={`m-2`} rel="icon" src="/icons/003-facebook.png" />
        <img className={`m-2`} rel="icon" src="/icons/004-youtube.png" />
      </div>
      <Typography variant="footer">Copyright © 2020 Academie One</Typography>
      <Typography variant="footer" className={`pt-8`} onClick={handleClick}>
        <Link href="/terms">Terms & Conditions</Link>
      </Typography>
    </div>
  );
};

export default Footer;
