import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';
import Image from 'next/image';

const HomeHero = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={data.img}
          alt="academie logo"
          className={styles.image}
          width={150}
          height={150}
          layout="responsive"
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
