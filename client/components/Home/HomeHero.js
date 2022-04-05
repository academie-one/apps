import React, {useContext } from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';
import ThemeContext from '../shared/ThemeContext';
import YouTube from 'react-youtube';

let flag = 0;

const chooseImg = (theme, data, isMobile) => {
  if (!isMobile)
    return (theme === 'dark' ?  data.video1 : data.video2);
  return (theme === 'dark' ?  data.mob_video1 : data.mob_video2);
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
        <video key={1} className={styles.backVideo} autoPlay muted>
          {isMobile ?
            <source src={data.mob_video2} type="video/mp4" />
            :
            <source src={data.video2} type="video/mp4" />
          }
        </video>
        ) : (
          <video key={2} className={styles.backVideo} autoPlay muted> 
            {isMobile ?
            <source src={data.mob_video1} type="video/mp4" />
            :
            <source src={data.video1} type="video/mp4" />
          }
          </video>
        )}
        {/* <YouTube className={styles.backVideo} videoId={chooseImg(theme)} opts={opts}/> */}
    </div>
  );
};

export default HomeHero;
