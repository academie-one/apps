import Typography from '../shared/Typography';
import styles from '../../styles/components/Foundation/Partners.module.css';

const Partners = ({ data }) => {
  return (
    <>
      <Typography variant="h2">{data.title}</Typography>
      <div className={styles.team}>
        {data.items.map((el, index) => (
          <div key={index}>
            <div className={`flex-1`}>
              <img src={el.img} alt="photo"/>
              <Typography variant="h4">{el.name}</Typography>
              <Typography variant="body" className={`pb-8`}>{el.title}</Typography>
            </div>
          </div>
        ))}
    </div>
  </>
  );
};

export default Partners;
