import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';

const HomeHero = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={data.img}
          alt="academie logo"
          className={styles.image}
          width={'100%'}
          height={'auto'}
        />
      </div>
      <div className={styles.content}>
        <div>
          <Typography variant="h2" className={styles.heroTitle}>
            {data.h2Title}
          </Typography>
          <Typography variant="body">{data.body}</Typography>
          <Typography variant="body">{data.body2}</Typography>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
