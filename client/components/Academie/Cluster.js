import Typography from '../shared/Typography';
import styles from '../../styles/components/Academie/Cluster.module.css';

const cluster = ({data}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="h4">{data.title2}</Typography>
      <Typography variant="body">{data.body}</Typography>
      {data.images.map((image, index) => (
        <img key={index} src={image} alt={`cluster ${index}`} />
      ))}
    </div>
  );
};

export default cluster;
