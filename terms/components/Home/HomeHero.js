import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';

const HomeHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Typography variant="h1" className={styles.photoText}>
          Coming soon.
        </Typography>
      </div>
    </div>
  );
};

export default HomeHero;
