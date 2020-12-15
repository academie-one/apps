import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Peer = ({data}) => {
    return (
        <div className={styles.container}>
            <Typography variant='h2'>{data.title}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
            <br />
            <div className={`sm:flex-shrink-0 sm:items-baseline`}>
                {data.items.map((el, index) => (
                    <div className={`sm:px-4 sm:text-left`}>
                        <img className={`w-full`} src={el.img} alt="urban"/>
                        <Typography variant='h4'>{el.title}</Typography>
                        <br />
                        <Typography varaint='body'>{el.body}</Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Peer;