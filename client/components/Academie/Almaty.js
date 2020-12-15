import Typography from '../shared/Typography';
import styles from '../../styles/components/Academie/Almaty.module.css';

const almaty = ({ data }) => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="body">{data.body}</Typography>
      <img className={`mt-6`} src={data.img} alt="almaty" />
    </div>
  );
};

export default almaty;
