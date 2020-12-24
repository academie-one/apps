import * as React from 'react';
import Typography from '../shared/Typography';

const Portfolio = ({data}) => {
  return (
    <div className={``}>
      <div>
        <Typography variant="h4">{data.title}</Typography>
        <Typography variant="body">{data.body}</Typography>
      </div>
      <img src={data.img} alt="cadet path" />
    </div>
  );
};

export default Portfolio;
