import React, {useContext} from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';
import ThemeContext from '../shared/ThemeContext';

let flag = 0;

const chooseImg = (theme, data) => {
  return (theme === 'dark' ? data.video2 : data.video1);
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
        <video className={styles.backVideo} autoPlay muted loop>
          <source src={data.video1}  type="video/mp4" />
        </video>
    </div>
  );
};

export default HomeHero;
