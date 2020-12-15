import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Ability = ({data}) => {
    return (
        <div className={styles.container}>
            <Typography variant='h3'>{data.title}</Typography>
            <br />
            <Typography variant='h4'>{data.title2}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
            <br/>
            <img className={`w-full`} src={data.img} alt="road"/>
        </div>
    );
};

export default Ability;