import Typography from '../shared/Typography';
import styles from '../../styles/components/Foundation/Message.module.css';

const Message = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.items.map((el, index) => (
      <div className={styles.gridContainer}>
        <div class="sm:row-span-3">
          <img src={el.img} key={index} className={styles.imgContainer}/>
        </div>
        <div class="space-y-8 sm:row-span-2 sm:col-span-2 ...">
          <Typography variant="h4">{el.name}</Typography>
          <Typography variant="body">{el.title}</Typography>
          <Typography variant="body">{el.bio}</Typography>
          <Typography variant="body">{el.body}</Typography>
        </div>
      </div>  
      ))}

    </div>
  );
};

export default Message;
