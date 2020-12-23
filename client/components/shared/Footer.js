import Typography from './Typography';
import Link from 'next/link';
import styles from '../../styles/components/shared/Footer.module.css';

const Footer = ({propsClick, darkMode}) => {
  const inverted = {
    '-webkit-filter': 'invert(1)',
    filter: 'invert(1)',
  };

  const handleClick = () => {
    if (propsClick) {
      propsClick();
    }
  };

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

      <div className={`flex flex-row space-x-2`}>
        <img
          className={`my-2 w-5 h-5 md:w-4 md:h-4`}
          style={darkMode ? inverted : {}}
          rel="icon"
          src="/icons/telegram.svg"
        />
        <img
          className={`my-2 w-5 h-5 md:w-4 md:h-4`}
          rel="icon"
          src="/icons/instagram.svg"
          style={darkMode ? inverted : {}}
        />
        <img
          className={`my-2 w-5 h-5 md:w-4 md:h-4`}
          rel="icon"
          src="/icons/facebook.svg"
          style={darkMode ? inverted : {}}
        />
        <img
          className={`my-2 w-5 h-5 md:w-4 md:h-4`}
          rel="icon"
          src="/icons/youtube.svg"
          style={darkMode ? inverted : {}}
        />
      </div>
      <Typography variant="footer">© Academie One</Typography>
      <Typography variant="footer" className={`pt-8`} onClick={handleClick}>
        <Link href="/terms">Terms & Conditions</Link>
      </Typography>
    </div>
  );
};

export default Footer;
