import React, {useContext} from 'react';
import JourneyItems from './JourneyItems';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Journey/JourneyCareer.module.css';
import ThemeContext from '../shared/ThemeContext';

const chooseImg = (theme, data) => {
  return (theme === 'dark' ? data.img : data.img2); 
};


const Career = ({data, itemsDirection = 'row'}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={styles.careerBlock}>
        <div className={styles.container}>
          <div className={styles.leftside}>
            {data.title && (
              <div className={'flex'}>
                {data.preTitle && (
                  <Typography
                    variant={data.titleVariant}
                    className={styles[data.circleColor]}
                  >
                    {data.preTitle}
                    &nbsp;
                  </Typography>
                )}
                <Typography variant={data.titleVariant}>{data.title}</Typography>
              </div>
            )}
            {data.subtitle && (
              <Typography
                variant={data.subtitleVariant}
                className={data.subtitleClass}
              >
                {data.subtitle}
              </Typography>
            )}
            {data.body && (
              <Typography variant={data.bodyVariant} className={data.bodyClass}>
                {data.body}
              </Typography>
            )}
          </div>
          <div className={`col-span-3`}>
              <img src={data.img} alt="spaceGirl"/>
          </div>
        </div>
        <JourneyItems items={data.items} direction={itemsDirection} />
    </div>
  );
};

export default Career;
