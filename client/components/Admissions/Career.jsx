import * as React from 'react';
import Typography from '../shared/Typography';

const Career = ({data}) => {
  return (
    <div>
        <Typography variant="h4">{data.title}</Typography>
        <br />
        <Typography variant="body">{data.body}</Typography>
    </div>
  );
};

export default Career;
