import React from 'react';
import JourneyItems from './JourneyItems';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Journey/JourneyContainer.module.css';

const JourneyContainer = ({data, itemsDirection = 'row'}) => {
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
            </Typography>
          )}
          &nbsp;
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
            src={data.img}
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
