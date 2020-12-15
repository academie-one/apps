import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Admissions/Admissions.module.css';

const CadetPath = ({data}) => {
    return (
        <div className={styles.container}>
            <Typography variant='h2'>{data.title}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
            <br />
            <img src={data.img} alt="cadet path"/>
        </div>
    );
};

export default CadetPath;