import React, {useContext} from 'react';
import ThemeContext from '../shared/ThemeContext';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Admissions/Admissions.module.css';

const Journey = ({data}) => {
  const {theme} = useContext(ThemeContext);

  const inverted = {
    WebkitFilter: 'invert(1)',
    filter: 'invert(1)',
  };

  return (
    <div className={styles.container}>
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="body">{data.body}</Typography>
      <img
        src={data.img}
        alt="cadet path"
        style={theme === 'dark' ? {} : inverted}
      />
    </div>
  );
};

export default Journey;
