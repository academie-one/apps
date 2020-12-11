import * as React from 'react';
import Typography from '../shared/Typography';

const Main = ({data}) => {
    return (
        <div className={`pb-16`}>
            <Typography variant='h1'>{data.title}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
        </div>
    );
};

export default Main;