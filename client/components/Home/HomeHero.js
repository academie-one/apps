import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';

const HomeHero = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={data.img} alt="main" className={styles.image} />
      </div>
      <div className={styles.content}>
        <div>
          <Typography variant="h2" className={styles.heroTitle}>
            {data.h2Title}
          </Typography>
          <Typography variant="body">{data.body}</Typography>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
