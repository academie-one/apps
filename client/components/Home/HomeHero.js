import React, {useContext } from 'react';
import styles from '../../styles/components/Home/HomeHero.module.css';
import ThemeContext from '../shared/ThemeContext';

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

  const opts = {
    height: 'h-screen',
    width: 'w-screen',
    playerVars: {
      controls: 0,
      autoPlay: 1, 
      loop: 1
    },
  };


  return (
    <div className={styles.container}>
      {theme == 'dark' ? (
        <video key={1} poster={data.img} className={styles.backVideo} autoPlay muted context="false" oncontextmenu="return false;">
          {isMobile ?
            <source src={data.mob_video2} type="video/mp4" />
            :
            <source src={data.video2} type="video/mp4" />
          }
        </video>
        ) : (
          <video key={2} poster={data.img} className={styles.backVideo} autoPlay muted context="false" oncontextmenu="return false;"> 
            {isMobile ?
            <source src={data.mob_video1} type="video/mp4" />
            :
            <source src={data.video1} type="video/mp4" />
          }
          </video>
        )}
    </div>
  );
};

export default HomeHero;
