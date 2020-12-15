import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Admissions/Admissions.module.css';

const Portfolio = ({data}) => {
  return (
    <div>
      <div className={styles.gridView}>
        <div>
          <Typography variant="h4">{data.title}</Typography>
          <br />
          <Typography variant="body">{data.body}</Typography>
        </div>
        <img src={data.img} alt="cadet path" />
      </div>
    </div>
  );
};

export default Portfolio;
