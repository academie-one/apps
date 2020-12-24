import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Program = ({data}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="body">{data.body}</Typography>
    </div>
  );
};

export default Program;
