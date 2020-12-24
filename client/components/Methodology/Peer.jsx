import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Peer = ({data}) => {
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
        <img src={data.img} alt="peer-to-peer" />
      </div>
    </div>
  );
};

export default Peer;
