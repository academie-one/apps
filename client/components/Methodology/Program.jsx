import * as React from 'react';
import Typography from '../shared/Typography';

const Program = ({data}) => {
    return (
        <div className={`mb-12`}>
            <Typography variant='h2'>{data.title}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
            <br/>
            <img className={`w-full`} src={data.img} alt="road"/>
        </div>
    );
};

export default Program;