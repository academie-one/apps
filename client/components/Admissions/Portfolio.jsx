import React, {useContext} from 'react';
import ThemeContext from '../shared/ThemeContext';
import Typography from '../shared/Typography';

const Portfolio = ({data}) => {
  const {theme} = useContext(ThemeContext);

  const inverted = {
    WebkitFilter: 'invert(1)',
    filter: 'invert(1)',
  };

  return (
    <div className={``}>
      <div>
        <Typography variant="h4">{data.title}</Typography>
        <Typography variant="body">{data.body}</Typography>
      </div>
      <img
        src={data.img}
        alt="cadet path"
        style={theme === 'dark' ? {} : inverted}
      />
    </div>
  );
};

export default Portfolio;
