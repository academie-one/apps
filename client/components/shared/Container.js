import React, {useContext} from 'react';
import Typography from './Typography';
import ThemeContext from '../shared/ThemeContext';
import styles from '../../styles/components/shared/Container.module.css';

const Container = ({data}) => {
  const {theme} = useContext(ThemeContext);

  const inverted = {
    WebkitFilter: 'invert(1)',
    filter: 'invert(1)',
  };

  let imgStyle = {};

  if (theme === 'dark' && data.imgInvert === 'direct') {
    imgStyle = inverted;
  } else if (theme !== 'dark' && data.imgInvert === 'reverse') {
    imgStyle = inverted;
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {data.h1Title && <Typography variant="h1">{data.h1Title}</Typography>}
        {data.h2Title && <Typography variant="h2">{data.h2Title}</Typography>}
        {data.h4Title && <Typography variant="h4">{data.h4Title}</Typography>}
        {data.body && <Typography variant="body">{data.body}</Typography>}
      </div>

      <div className={styles.content}>
        {data.items && (
          <div className={styles.items}>
            {data.items.map((el, index) => (
              <div key={index} className={styles.module}>
                {el.title && <Typography variant="h4">{el.title}</Typography>}
                {el.body && <Typography variant="body">{el.body}</Typography>}
              </div>
            ))}
          </div>
        )}
        {data.imgPos === 'right' && (
          <img src={data.img} alt="peer-to-peer" style={imgStyle} />
        )}
      </div>

      {data.imgPos === 'bottom' && (
        <div>
          <img
            src={data.img}
            alt={data.imgAlt}
            className={styles.img}
            style={imgStyle}
          />
        </div>
      )}
    </div>
  );
};

export default Container;
