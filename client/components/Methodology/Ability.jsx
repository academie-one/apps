import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Ability = ({data}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h3">{data.title}</Typography>
      <Typography variant="h4">{data.title2}</Typography>
      <Typography variant="body">{data.body}</Typography>
    </div>
  );
};

export default Ability;
