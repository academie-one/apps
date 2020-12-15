import Typography from '../shared/Typography';
import styles from '../../styles/components/Academie/Main.module.css';

const main = ({data}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h1">{data.title}</Typography>
      {data.body.map((el, index) => (
        <Typography variant="body" key={index}>
          {el}
        </Typography>
      ))}
      
    </div>
  );
};

export default main;
