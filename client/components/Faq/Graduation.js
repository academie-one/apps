import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Faq/Learning.module.css';

const Graduation = ({data}) => {
  const [clicked, setClicked] = React.useState(false);
  const [drop, setDrop] = React.useState('+');

  const handleClick = () => {
    setClicked(!clicked)
    drop == '+' ? setDrop('-') : setDrop('+');
  }

  return (
    <>
      <div className={styles.items}>
            <div className={styles.clickable} onClick={handleClick}>
              <Typography variant="h3">{data.h2Title}</Typography>
              <Typography variant="h3">
                {drop}
              </Typography>
            </div>
            {clicked && (
              <>
                {data.items.map((el, index2) => (
                  <div key={index2} className={styles.module}>
                    <Typography className={styles.question} variant="h4">
                      {el.question}
                    </Typography>
                    <Typography className={styles.answer} variant="body">
                      {el.answer}
                    </Typography>
                  </div>
                ))}
              </>
            )}
            <hr className={styles.hr}/>
          </div>
    </>
  );
};

export default Graduation;
