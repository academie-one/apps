import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Piscine = ({data}) => {
    return (
        <div className={styles.container}>
            <Typography variant='h2'>{data.title}</Typography>
            <br />
            <Typography variant='h4'>{data.title2}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
            <br />
            <img className={`w-full`} src={data.img} alt="Vanya"/>
            <br />
            <div className={`sm:flex sm:justify-start sm:space-x-4`}>
                {data.items.map((el, index) => (
                    <div className={`flex-1`}>
                        <Typography variant='h4'>{el.title}</Typography>
                        <br />
                        <Typography varaint='body'>{el.body}</Typography>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Piscine;