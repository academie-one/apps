import React, {useContext} from 'react';
import Typography from '../shared/Typography';
import ThemeContext from '../shared/ThemeContext';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Peer = ({data}) => {
  const {theme} = useContext(ThemeContext);

  const inverted = {
    WebkitFilter: 'invert(1)',
    filter: 'invert(1)',
  };

  return (
    <div className={styles.container}>
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="body">{data.body}</Typography>
      <div className={styles.content}>
        <div className={styles.items}>
          {data.items.map((el, index) => (
            <div className={`sm:mr-6 sm:text-left`} key={index}>
              <Typography variant="h4">{el.title}</Typography>
              <Typography varaint="body">{el.body}</Typography>
            </div>
          ))}
        </div>
        <img
          src={data.img}
          alt="peer-to-peer"
          style={theme === 'dark' ? inverted : {}}
        />
      </div>
    </div>
  );
};

export default Peer;
