import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';

const HomeHero = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Typography variant="h1" className={styles.photoText}>
            {data.title}
          </Typography>

          <img src={data.img} alt="main" className={styles.image} />
        </div>

        <Typography variant="body">{data.body}</Typography>
      </div>
    </div>
  );
};

export default HomeHero;
