import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Admissions/Admissions.module.css';

const ImportantDates = ({data}) => {
  return (
    <div className={styles.boxView}>
      <Typography variant="h4">{data.title}</Typography>

      <div>
        {data.body.map((el, index) => (
          <Typography key={index} varaint="body">
            {el}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;
