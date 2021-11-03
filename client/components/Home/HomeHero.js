import React, {useContext} from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';
import ThemeContext from '../shared/ThemeContext';
import { isMobile } from 'react-device-detect';

const HomeHero = ({data}) => {
  const {theme} = useContext(ThemeContext);

  const inverted = {
    WebkitFilter: 'invert(1)',
    filter: 'invert(1)',
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftText}>
        <Typography variant={'h2'}>{"Code your\n future"}</Typography>
        <Typography variant={'h4'}>{"Start IT career"}</Typography>
      </div>
      {console.log(isMobile)}
      <img src={(isMobile) ? data.img : data.heroImage} alt="mobile-wtf"/>
    </div>
  );
};

export default HomeHero;
