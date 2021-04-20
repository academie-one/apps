import Typography from '../shared/Typography';
import styles from '../../styles/components/Home/HomeHero.module.css';

const HomeHero = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftText}>
        <Typography variant={'h3'}>{data.textLeft}</Typography>
      </div>
      <div className={styles.circleContainer}>
        <div className={styles.circleDiv}></div>
      </div>
      <div className={styles.rightText}>
        <Typography variant={'h3'}>{data.textRight}</Typography>
      </div>
    </div>
  );
};

export default HomeHero;
