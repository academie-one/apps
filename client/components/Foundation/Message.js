import Typography from '../shared/Typography';
import styles from '../../styles/components/Foundation/Message.module.css';

const Message = ({ data }) => {
  return (
    <div className={styles.container}>
      <Typography variant="h2" className={`mb-8`}>{data.title}</Typography>
      {data.items.map((el, index) => (
        <div className={`mb-8`} key={index}>
          <div className={`md:flex mb-4`}>
            <div className={`w-full md:w-2/5`}>
              <img src={el.img}/>
            </div>
            <div className={`w-full md:w-2/5 md:mx-4 space-y-4`}>
              <Typography variant="h4">{el.name}</Typography>
              <Typography variant="body">{el.title}</Typography>
              <Typography variant="body">{el.bio}</Typography>
            </div>
            <div className={`md:w-1/5`}></div>
          </div>
          <div className={styles.description}>
            {el.body.map((en, index2) => ( 
              <div key={index2}>
                <Typography variant="body">{en}</Typography>
              </div>
            ))}
          </div>
          <hr className={styles.hr}/>
        </div>
      ))}
    </div>
  );
};

export default Message;
