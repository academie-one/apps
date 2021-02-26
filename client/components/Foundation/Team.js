import Typography from '../shared/Typography';
import styles from '../../styles/components/Foundation/Message.module.css';

const Team = ({ data }) => {
  return (
    <div className={styles.container}>
        <Typography variant="h2">{data.title}</Typography>
        {data.items.map((el,index) => (
            <div className={`flex`}>
                <Typography variant="h4">{el.name}</Typography>
            </div>
        ))}
    </div>
  );
};

export default Team;
