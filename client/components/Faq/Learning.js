import * as React from 'react';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Faq/Learning.module.css';

const Learning = ({data}) => {
  const [clicked, setClicked] = React.useState(false);
  
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <div className={styles.items}>
        {data.sections.map((en, index) => (
          <div key={index} onClick={handleClick}>
            <Typography variant="h2"
            >{en.h2Title}</Typography>
            {clicked && (
              <>
                {en.items.map((el, index2) => (
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
              
            
            {console.log(clicked)}
          </div>
         ))} 
      </div>
    </>
  );
};

export default Learning;
