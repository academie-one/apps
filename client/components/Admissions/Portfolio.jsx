import * as React from 'react';
import Typography from '../shared/Typography';

const Portfolio = ({data}) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 py-16">
        <div>
          <Typography variant="h4">{data.title}</Typography>
          <br />
          <Typography variant="body">{data.body}</Typography>
        </div>
        <img src={data.img} alt="cadet path" />
      </div>
    </div>
  );
};

export default Portfolio;
