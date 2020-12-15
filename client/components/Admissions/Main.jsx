import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Admissions/Admissions.module.css';

const Main = ({data}) => {
    return (
        <div className={styles.container}>
            <Typography variant='h1'>{data.title}</Typography>
            
            <Typography variant='body'>{data.body}</Typography>
        </div>
    );
};

export default Main;