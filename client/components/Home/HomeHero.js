import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';

const HomeHero = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <Typography variant="h1" className={styles.photoText}>
            {data.title}
          </Typography>

        <div className={styles.imageContainer}>
          
          <img src={data.img} alt="main" className={styles.image} />
        </div>

        <Typography variant="body">{data.body}</Typography>
      </div>
    </div>
  );
};

export default HomeHero;
