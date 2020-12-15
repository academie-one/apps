import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Peer = ({ data }) => {
    return (
        <div className={styles.container}>
            <Typography variant='h2'>{data.title}</Typography>

            <Typography variant='body'>{data.body}</Typography>

            <div className={`sm:flex sm:items-baseline`}>
                {data.items.map((el, index) => (
                    <div className={`sm:pr-4 sm:text-left`}>
                        <img className={`w-full`} src={el.img} alt="urban" />
                        <Typography variant='h4'>{el.title}</Typography>

                        <Typography varaint='body'>{el.body}</Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Peer;
