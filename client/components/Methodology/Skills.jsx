import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Skills = ({data}) => {
    return (
        <div className={styles.container}>
            <Typography variant='h4'>{data.title}</Typography>
            
            <div className={styles.gridView2}>
                {data.items.map((el, index) => (
                    <>
                        <div>
                            <img className={`w-1/2`} src={el.img} alt="01"/>
                        </div>
                        <div>
                            <Typography variant='h4'>{el.title}</Typography>
                            
                            <Typography varaint='body'>{el.body}</Typography>
                            
                            <Typography varaint='body'>{el.body2}</Typography>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Skills;