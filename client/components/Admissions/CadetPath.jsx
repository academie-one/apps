import * as React from 'react';
import Typography from '../shared/Typography';

const CadetPath = ({data}) => {
    return (
        <div className={`py-16`}>
            <Typography variant='h2'>{data.title}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
            <br />
            <img src={data.img} alt="cadet path"/>
        </div>
    );
};

export default CadetPath;