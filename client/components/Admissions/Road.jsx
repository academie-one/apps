import React, {useContext} from 'react';
import ThemeContext from '../shared/ThemeContext';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Admissions/Admissions.module.css';

const chooseImg = (theme, data) => {
  return (theme === 'dark' ? data.img : data.img2); 
};

const Road = ({data}) => {
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
      {/* <img src={chooseImg(theme, data)} alt="progress" style={imgStyle}/> */}
      <div className="flex flex-col mt-12">
        {data.items.map((el, index) => (
          <div
            className={styles.listView}
            key={index}
          >
            <div className={styles.itemsView}> 
            {el.title && (
              <div className={'flex'}>
                {el.preTitle && (
                  <Typography
                    variant='h4'
                    className={styles[el.circleColor]}
                  >
                    {el.preTitle}
                  </Typography>
                )}
                &nbsp;
              <Typography variant="h4">{el.title}</Typography>
              </div>
            )}
              <Typography varaint="body">{el.body}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Road;
