import Typography from '../shared/Typography';
import styles from '../../styles/components/Foundation/Message.module.css';

const message = ({ data }) => {
  return (
    <div className={styles.container}>
      <Typography variant="h2">{data.title}</Typography>
      <div className={styles.investorContainer}>
        <div>
          <img src={data.items.img} className={`mt-8 mb-4 w-1/3`} alt="founder" />
        </div>
        <Typography variant="h3">{data.items.name}</Typography>
        <Typography variant="h4">{data.items.title}</Typography>
      </div>
      <div className={styles.description}>
        {data.body.map((item, index) => (
          <>
          <Typography variant="body" key={index}>
            {item}
          </Typography>
          <br />
          </>
        ))}
        
      </div>

    </div>
  );
};

export default message;
