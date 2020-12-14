import * as React from 'react';
import Typography from '../shared/Typography';

const Spec = ({data}) => {
    return (
        <div className={`py-16`}>
            <Typography variant='h4'>{data.title}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
        </div>
    );
};

export default Spec;