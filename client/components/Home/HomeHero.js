import React, {useContext} from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';
import ThemeContext from '../shared/ThemeContext';

let flag = 0;

const chooseImg = (data) => {
  return (flag ? data.heroImage : data.img);
}

const HomeHero = ({data}) => {
  const {theme} = useContext(ThemeContext);

  const inverted = {
    WebkitFilter: 'invert(1)',
    filter: 'invert(1)',
  };

  React.useEffect(() => {
    if (window.innerWidth >= 768)
      flag = 1;
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.leftText}>
        <Typography variant={'h2'}>{"Code your\n future"}</Typography>
        <Typography variant={'h4'}>{"Start IT career"}</Typography>
      </div>
      <img src={chooseImg(data)} alt="mobile-wtf"/>
    </div>
  );
};

export default HomeHero;
