import * as React from 'react';
import Typography from '../shared/Typography';

const Career = ({data}) => {
  return (
    <div className={`mb-12`}>
        <Typography variant="h4">{data.title}</Typography>
        <br />
        <Typography variant="body">{data.body}</Typography>
    </div>
  );
};

export default Career;
