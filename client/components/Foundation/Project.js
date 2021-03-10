import Typography from '../shared/Typography';
import styles from '../../styles/components/Foundation/Message.module.css';

const Project = ({ data }) => {
  return (
    <div className={styles.container}>
      <Typography variant="h2" className={`mb-8`}>{data.title}</Typography>
        <div className={`space-y-4`}>
            {data.body.map((el, index) => (
                <div key={index}>
                    <Typography variant="body">{el}</Typography>   
                </div>
            ))}
        </div>
    </div>
  );
};

export default Project;
