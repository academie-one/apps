import React, {useContext} from 'react';
import styles from '../../styles/components/Journey/JourneyItems.module.css';
import Typography from '../shared/Typography';
import ThemeContext from '../shared/ThemeContext';

const chooseImg = (theme, data) => {
  if (data.img && data.img2)
    return (theme === 'dark' ? data.img : data.img2);
  if (data.img)
    return (data.img);
  return (data.img2);
};

const JourneyItems = ({items, direction = 'row'}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={direction === 'row' ? styles.itemsRow : styles.itemsCol}>
      {items && items.map((el, index) => (
        <div key={index} className={styles.item}>
          {(el.img || el.img2) && (
            <img className={`w-3/4 h-60`} src={chooseImg(theme, el)} alt={el.imgAlt} />
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
