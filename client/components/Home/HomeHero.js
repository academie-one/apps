import React, {useContext} from 'react';
// import Typography from '../shared/Typography';
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
      
    </div>
  );
};

export default HomeHero;
