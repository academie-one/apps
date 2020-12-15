import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Areas = ({data}) => {
    return (
        <div className={styles.container}>
            <Typography variant='h4'>{data.title}</Typography>
            <br />
            <div className={styles.gridView}>
                {data.items.map((el, index) => (
                        <div key={index}>
                            <img className={`w-full`} src={el.img} alt="01"/>
                            <Typography variant='h4'>{el.title}</Typography>
                            <br />
                            <Typography varaint='body'>{el.body}</Typography>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Areas;