import Typography from '../shared/Typography';
import styles from '../../styles/components/Academie/Campus.module.css';

const campus = ({data}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="body">{data.body}</Typography>
    </div>
  );
};

export default campus;
