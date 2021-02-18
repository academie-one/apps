import React, {useContext} from 'react';
import ThemeContext from '../shared/ThemeContext';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Admissions/Admissions.module.css';

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
      <Typography variant="h2">{data.title}</Typography>
      <div className="flex flex-col mt-12">
        {data.items.map((el, index) => (
          <div
            className={`flex md:flex-row flex-col items-center md:space-x-8 space-y-4`}
            key={index}
          >
            <div className={`flex-1`}>
              <img src={el.img} alt="01" style={imgStyle}/>
            </div>
            <div className={`flex-1 space-y-2`}>
              <Typography variant="h4">{el.title}</Typography>
              <Typography varaint="body">{el.body}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Road;
