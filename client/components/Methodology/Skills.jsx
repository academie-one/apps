import React, {useContext} from 'react';
import ThemeContext from '../shared/ThemeContext';
import Typography from '../shared/Typography';
import styles from '../../styles/components/Methodology/Methodology.module.css';

const Skills = ({data}) => {
  const {theme} = useContext(ThemeContext);

  const inverted = {
    WebkitFilter: 'invert(1)',
    filter: 'invert(1)',
  };

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {data.items.map((el, index) => (
          <div
            className={`flex md:flex-row flex-col space-y-8 md:space-y-0 items-center space-x-8`}
            key={index}
          >
            <img
              className={`w-56`}
              src={el.img}
              alt="01"
              style={theme === 'dark' ? inverted : {}}
            />
            <div>
              <Typography variant="h4">{el.title}</Typography>
              <Typography varaint="body" className={`mt-4`}>
                {el.body}
              </Typography>
              <Typography varaint="body" className={`mt-4`}>
                {el.body2}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
