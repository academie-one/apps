import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Admissions/Admissions.module.css';

const Spec = ({data}) => {
    return (
        <div className={styles.container}>
            <Typography variant='h4'>{data.title}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
        </div>
    );
};

export default Spec;