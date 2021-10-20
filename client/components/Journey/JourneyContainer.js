import React, {useContext} from 'react';
import JourneyItems from './JourneyItems';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Journey/JourneyContainer.module.css';
import ThemeContext from '../shared/ThemeContext';

const chooseImg = (theme, data) => {
  return (theme === 'dark' ? data.img : data.img2); 
};


const JourneyContainer = ({data, itemsDirection = 'row'}) => {
  const {theme} = useContext(ThemeContext);
  let containerType = 'row';

  if (data && data.img) {
    if (data.imgPos === 'bottom' || data.imgPos === 'top') {
      containerType = 'row';
    } else if (data.imgPos === 'left' || data.imgPos === 'right') {
      containerType = 'col';
    } else {
      console.warn('something went wrong with container');
    }
  }

  return (
    <div className={styles.container}>
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
      {data.img ? (
        <div
          className={
            containerType === 'row'
              ? styles.itemsContainerRow
              : styles.itemsContainerCol
          }
        >
          <img
            src={chooseImg(theme, data)}
            alt={data.imgAlt}
            className={`${styles.img} ${
              data.imgPos === 'top' || data.imgPos === 'left'
                ? 'order-first'
                : 'order-last'
            }`}
          />
          <JourneyItems items={data.items} direction={itemsDirection} />
        </div>
      ) : (
        <JourneyItems items={data.items} direction={itemsDirection} />
      )}
    </div>
  );
};

export default JourneyContainer;
