import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Admissions/Admissions.module.css';

const CadetPath = ({data}) => {
    return (
        <div className={styles.container}>
            <Typography variant='h2'>{data.title}</Typography>
            
            <Typography variant='body'>{data.body}</Typography>
            
            <img src={data.img} alt="cadet path"/>
        </div>
    );
};

export default CadetPath;