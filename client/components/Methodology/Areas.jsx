import * as React from 'react';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Areas = ({data}) => {
  return (
    <div className={styles.container}>
      <img src={data.img} alt="specs" />
    </div>
  );
};

export default Areas;
