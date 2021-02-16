import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';
import Typography from './Typography';
import Link from 'next/link';
import styles from '../../styles/components/shared/Footer.module.css';

const Footer = ({propsClick}) => {
  const {theme} = useContext(ThemeContext);
  const inverted = {
    WebkitFilter: 'invert(1)',
    filter: 'invert(1)',
  };

  const handleClick = () => {
    if (propsClick) {
      propsClick();
    }
  };

  const iconLinks = [
    {
      'icon': 'facebook',
      'web': 'https://www.facebook.com/academie.one'
    },
    {
      'icon': 'instagram',
      'web': 'https://www.instagram.com/the.academie/'
    },
    {
      'icon': 'telegram',
      'web': 'https://t.me/theacademie'
    },
    {
      'icon': 'youtube',
      'web': 'https://www.youtube.com/channel/UCCu8zvywggNLZoVeAuZYdzw'
    }];

  return (
    <div className={`${styles.navFooterLinks}`}>
      <div className={`flex flex-row space-x-2`}>
        <Typography variant="footer" onClick={handleClick}>
          <Link href="/contact">Contact</Link>
        </Typography>
        <Typography variant="footer" onClick={handleClick}>
          <Link href="/faq">FAQ</Link>
        </Typography>
        <Typography variant="footer" onClick={handleClick}>
          <Link href="/media">Media</Link>
        </Typography>
      </div>

      <div className={`flex flex-row space-x-3`}>
        {iconLinks.map((iconLink) => (
          <>
            <a href={iconLink.web} target="blank">
              <img
                key={iconLink}
                className={`my-2 w-5 h-5 md:w-4 md:h-4`}
                style={theme === 'dark' ? {} : inverted}
                rel="icon"
                src={`/icons/${iconLink.icon}.svg`}
              />
            </a>
          </>
        ))}
      </div>
      <Typography variant="footer">© Academie One</Typography>
      <Typography variant="footer" className={`pt-8`} onClick={handleClick}>
        <Link href="/terms">Terms & Conditions</Link>
      </Typography>
    </div>
  );
};

export default Footer;
