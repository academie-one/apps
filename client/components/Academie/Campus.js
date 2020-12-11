import Typography from '../shared/Typography';
import styles from '../../styles/components/Academie/Campus.module.css';

const campus = ({data}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="h4">{data.title2}</Typography>
      {data.body.map((el, index) => (
        <Typography variant="body" key={index}>
          {el}
        </Typography>
      ))}
    </div>
  );
};

export default campus;
