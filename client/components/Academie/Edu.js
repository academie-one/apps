import Typography from '../shared/Typography';
import styles from '../../styles/components/Academie/Edu.module.css';

const edu = ({data}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h4">{data.title}</Typography>
      <Typography variant="body">{data.body}</Typography>
      <br />
      <Typography variant="body">
        ..........Space for illustration........
      </Typography>
    </div>
  );
};

export default edu;
