import React, {useContext} from 'react';
import ThemeContext from '../shared/ThemeContext';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Spec = ({data}) => {
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
    <>
        <Typography variant="h4">{data.h4Title}</Typography>
        <div className={styles.container2}>
            {data.item.map((el, index) => (
                <div className={`justify-self-center items-center`} key={index}>
                    {el.img && <img className={`w-1/2`} src={el.img} alt={el.title} style={imgStyle}/>}
                    {el.title && <Typography variant="body">{el.title}</Typography>}
                </div>
                ))}
        </div>
    </>
  );
};

export default Spec;