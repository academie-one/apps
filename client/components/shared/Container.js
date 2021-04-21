import React, {useContext} from 'react';
import Typography from './Typography';
import ThemeContext from '../shared/ThemeContext';
import styles from '../../styles/components/shared/Container.module.css';

const inverted = {
  WebkitFilter: 'invert(1)',
  filter: 'invert(1)',
};

const invertImage = (theme, imgInvert) => {
  let imgStyle = {};
  if (theme === 'dark' && imgInvert === 'direct') {
    imgStyle = inverted;
  } else if (theme !== 'dark' && imgInvert === 'reverse') {
    imgStyle = inverted;
  }
  return imgStyle;
};

const HorizontalItems = ({items, theme}) => {
  return (
    <>
      <div className={styles.horizontalItems}>
        {items.map((el, index) => (
          <div key={index} className={styles.module}>
            {el.img && (
              <img
                className={`w-full h-60`}
                src={el.img}
                alt={el.imgAlt}
                style={invertImage(theme, el.imgInvert)}
              />
            )}
            {el.title && <Typography variant="h4">{el.title}</Typography>}
            {el.body && <Typography variant="body">{el.body}</Typography>}
          </div>
        ))}
      </div>
    </>
  );
};

const Container = ({data}) => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      {data.h1Title && <Typography variant="h1">{data.h1Title}</Typography>}
      {data.h2Title && <Typography variant="h2">{data.h2Title}</Typography>}
      {data.h4Title && <Typography variant="h4">{data.h4Title}</Typography>}

      {data.img && data.imgPos === 'leftToBody' ? (
        <div className={styles.containerLeftImg}>
          <img
            src={data.img}
            alt={data.imgAlt}
            className={styles.leftImg}
            style={invertImage(theme, data.imgInvert)}
          />
          {data.body && <Typography variant="body">{data.body}</Typography>}
        </div>
      ) : (
        data.body && <Typography variant="body">{data.body}</Typography>
      )}

      {data.items && <HorizontalItems items={data.items} theme={theme} />}
      {data.imgPos === 'right' && (
        <img
          className={`w-full sm:w-2/5`}
          src={data.img}
          alt={data.imgAlt}
          style={invertImage(theme, data.imgInvert)}
        />
      )}

      {data.imgPos === 'bottom' && (
        <div>
          <img
            src={data.img}
            alt={data.imgAlt}
            className={styles.img}
            style={invertImage(theme, data.imgInvert)}
          />
        </div>
      )}
      {data.bodyTail && <Typography variant="body">{data.bodyTail}</Typography>}
    </div>
  );
};

export default Container;
