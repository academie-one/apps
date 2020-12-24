import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Piscine = ({data}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="body">{data.body}</Typography>
      <img className={`w-full my-8`} src={data.img} alt="Vanya" />
      <div className={`sm:flex sm:justify-start sm:space-x-4`}>
        {data.items.map((el, index) => (
          <div className={`flex-1`} key={index}>
            <Typography variant="h4">{el.title}</Typography>
            <Typography varaint="body">{el.body}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Piscine;
