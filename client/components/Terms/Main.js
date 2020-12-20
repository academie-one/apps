import Typography from '../shared/Typography';
import styles from '../../styles/components/Terms/Main.module.css';

const Main = ({ data }) => {
    return (
        <div className={styles.container}>
            <Typography variant="h1">{data.title}</Typography>

        </div>
    );
};

export default Main;
