import * as React from 'react';
import Typography from '../shared/Typography';

const Spec = ({data}) => {
  return (
    <div className={`mb-8`}>
      <Typography variant="h4">{data.title}</Typography>
    </div>
  );
};

export default Spec;
