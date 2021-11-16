import React, {useContext} from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';
import ThemeContext from '../shared/ThemeContext';

let flag = 0;

const chooseImg = (ismobile, data) => {
  return (ismobile ? data.img : data.heroImage);
}

const HomeHero = ({data}) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  const {theme} = useContext(ThemeContext);

  const inverted = {
    WebkitFilter: 'invert(1)',
    filter: 'invert(1)',
  };


  return (
    <div className={styles.container}>
      <div className={styles.leftText}>
        <Typography variant={'h2'}>{"Code your\n future"}</Typography>
        &nbsp;
        <Typography className={'font-medium'}>{"Start IT career"}</Typography>
      </div>
      <img src={chooseImg(isMobile, data)} alt="mobile-wtf"/>
    </div>
  );
};

export default HomeHero;
