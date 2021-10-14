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
      icon: 'facebook',
      web: 'https://www.facebook.com/academie.one',
      key: 1,
    },
    {
      icon: 'instagram',
      web: 'https://www.instagram.com/the.academie/',
      key: 2,
    },
    {
      icon: 'telegram',
      web: 'https://t.me/theacademie',
      key: 3,
    },
    {
      icon: 'youtube',
      web: 'https://www.youtube.com/channel/UCCu8zvywggNLZoVeAuZYdzw',
      key: 4,
    },
  ];

  return (
    <div className={`${styles.navFooterLinks}`}>
      <div className={`flex flex-row space-x-2`}>
        <Typography variant="caption" onClick={handleClick}>
          <Link href="/contact">Contact</Link>
        </Typography>
        <Typography variant="caption" onClick={handleClick}>
          <Link href="/media">Media</Link>
        </Typography>
      </div>

      <div className={`flex flex-row space-x-3`}>
        {iconLinks.map((iconLink, index) => (
          <a key={index} href={iconLink.web} target="blank">
            <img
              key={index}
              className={`my-2 w-5 h-5 md:w-4 md:h-4`}
              style={theme === 'dark' ? {} : inverted}
              rel="icon"
              src={`/icons/${iconLink.icon}.svg`}
              alt="social-network"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
