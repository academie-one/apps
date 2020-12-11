import Typography from '../shared/Typography';
import styles from '../../styles/components/Foundation/Model.module.css';

const model = ({data}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="body">{data.body}</Typography>
      <div className={styles.body}>
        {data.items.map((item, index) => (
          <div className={styles.model} key={index}>
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="body">{item.body}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default model;
