import Typography from '../shared/Typography';
import styles from '../../styles/components/Terms/Legal.module.css';

const Legal = ({ data }) => {
    return (
        <>
            <div className={styles.items}>
                {data.items.map((el, index) => (
                    <div key={index} className={styles.module}>
                        <Typography className={styles.question} variant="h3">{el.question}</Typography>
                        <Typography className={styles.answer} variant="body">{el.answer}</Typography>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Legal;
