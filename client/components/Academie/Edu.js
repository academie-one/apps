import Typography from '../shared/Typography';
import styles from '../../styles/components/Academie/Edu.module.css';

const edu = ({data}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h4">{data.title}</Typography>
      <Typography variant="body">{data.body}</Typography>
      <div>
        <img src={data.img} alt="map" className={styles.img} />
      </div>
      <hr />
    </div>
  );
};

export default edu;
