import React from 'react';
import styles from '../../styles/components/Journey/JourneyItems.module.css';
import Typography from '../shared/Typography';

const JourneyItems = ({items, direction = 'row'}) => {
  return (
    <div className={direction === 'row' ? styles.itemsRow : styles.itemsCol}>
      {items && items.map((el, index) => (
        <div key={index} className={styles.item}>
          {el.img && (
            <img className={`w-full h-60`} src={el.img} alt={el.imgAlt} />
          )}

          {el.title && (
            <Typography variant={el.titleVariant} className={styles[el.titleClass]}>
              {el.title}
            </Typography>
          )}
          {el.body && (
            <Typography variant={el.bodyVariant} className={el.bodyClass}>
              {el.body}
            </Typography>
          )}
        </div>
      ))}
    </div>
  );
};

export default JourneyItems;
