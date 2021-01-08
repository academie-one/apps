import Typography from '../shared/Typography';
import styles from '../../styles/components/Faq/Learning.module.css';

const Learning = ({data}) => {
  return (
    <>
      <Typography variant="h2">{data.title}</Typography>
      <Typography variant="body">{data.body}</Typography>
      <div className={styles.items}>
        {data.items.map((el, index) => (
          <div key={index} className={styles.module}>
            <Typography className={styles.question} variant="h3">
              {el.question}
            </Typography>
            <Typography className={styles.answer} variant="body">
              {el.answer}
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
};

export default Learning;
