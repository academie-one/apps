import * as React from 'react';
import Typography from '../shared/Typography';

const Schedule = ({data}) => {
    return (
        <div className={`pb-16`}>
            <Typography variant='h3'>{data.title}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
        </div>
    );
};

export default Schedule;