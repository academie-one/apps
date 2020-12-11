import Typography from '../shared/Typography';
import styles from '../../styles/components/Academie/Concept.module.css';

const concept = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <Typography variant="h1">{data.title}</Typography>
        <Typography variant="h4">{data.title2}</Typography>
        <Typography variant="body">{data.body}</Typography>
      </div>
      <div>
        <img src={data.img} alt="academie people" className={styles.img} />
      </div>
      <div className={styles.items}>
        {data.items.map((el, index) => (
          <div key={index} className={styles.module}>
            <Typography variant="h4">{el.title}</Typography>
            <Typography variant="body">{el.body}</Typography>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default concept;
