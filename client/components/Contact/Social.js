import React, {useContext} from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Contact/Contact.module.css';
import ThemeContext from '../shared/ThemeContext';

const Social = ({data}) => {
  const {theme} = useContext(ThemeContext);

  const inverted = {
    WebkitFilter: 'invert(1)',
    filter: 'invert(1)',
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
    }
];
const enterLinks = [
    {
        icon: 'tiktok',
        web: 'https://www.tiktok.com/@the.academie',
        key: 4,
        imgInvert: "direct"
    },
    {
        icon: 'spotify',
        web: 'https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=0248162981314472',
        key: 5,
        imgInvert: "direct"
    },
    {
      icon: 'youtube',
      web: 'https://www.youtube.com/channel/UCCu8zvywggNLZoVeAuZYdzw',
      key: 6,
      imgInvert: "reverse"
    },

  ];

  const invertImage = (theme, imgInvert) => {
    let imgStyle = {};
    if (theme === 'dark' && imgInvert === 'direct') {
      imgStyle = inverted;
    } else if (theme !== 'dark' && imgInvert === 'reverse') {
      imgStyle = inverted;
    }
    return imgStyle;
  };

  return (
    <div className={styles.container}>
      <Typography variant="h2">{data.title}</Typography>
      <>
        <div>
            <Typography variant="body">{data.body1}</Typography>
        </div>
        <div className={styles.socials}>
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
        <div>
            <Typography variant="body">{data.body2}</Typography>
        </div>
        <div className={styles.socials}>
        {enterLinks.map((iconLink, index) => (
            <a key={index} href={iconLink.web} target="blank">
                <img
                key={index}
                className={`my-2 w-5 h-5 md:w-4 md:h-4`}
                style={invertImage(theme, iconLink.imgInvert)}
                rel="icon"
                src={`/icons/${iconLink.icon}.svg`}
                alt="social-network"
                />
            </a>
            ))}    
        </div>
    </>
    </div>
  );
};

export default Social;
