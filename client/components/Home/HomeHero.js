import React, {useContext} from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';
import ThemeContext from '../shared/ThemeContext';

const HomeHero = ({data}) => {
  const {theme} = useContext(ThemeContext);

  const inverted = {
    WebkitFilter: 'invert(1)',
    filter: 'invert(1)',
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftText}>
        <Typography className={styles.blueText} variant={'h2'}>{data.textLeft1}</Typography>
      </div>
      <div className={styles.circleContainer}>
        <img src={data.heroImage} style={theme === 'dark' ? inverted : {}} alt="cirlce_hero"/>
      </div>
      <div className={styles.rightText}>
        <Typography variant={'h2'}>{data.textRight}</Typography>
      </div>
    </div>
  );
};

export default HomeHero;
