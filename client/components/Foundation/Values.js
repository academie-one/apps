import Typography from '../shared/Typography';
import styles from '../../styles/components/Foundation/Message.module.css';

const Values = ({ data }) => {
  return (
    <div className={styles.container}>
      <Typography variant="h4" className={`mb-8`}>{data.h4Title}</Typography>
        <div className={`space-y-4`}>
            {data.items.map((el, index) => (
                <div key={index} className={`flex space-x-1`}>
                    <Typography variant="body" >{el.title}</Typography>
                    <Typography variant="body" > - </Typography>
                    <Typography variant="body">{el.body}</Typography>   
                </div>
            ))}
        </div>
    </div>
  );
};

export default Values;
