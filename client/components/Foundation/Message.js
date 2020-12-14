import Typography from '../shared/Typography';
import styles from '../../styles/components/Foundation/Message.module.css';

const message = ({data}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">{data.title}</Typography>
      <div className={styles.investorContainer}>
        <div>
          <img src={data.items.img} alt="founder" />
        </div>
        <Typography variant="h3">{data.items.name}</Typography>
        <Typography variant="h4">{data.items.title}</Typography>
      </div>
      <div className={styles.description}>
        {data.body.map((item, index) => (
          <Typography variant="body" key={index}>
            {item}
          </Typography>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default message;