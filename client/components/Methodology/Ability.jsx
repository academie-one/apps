import * as React from 'react';
import Typography from '../shared/Typography';

const Ability = ({data}) => {
    return (
        <div className={`mb-12`}>
            <Typography variant='h3'>{data.title}</Typography>
            <br />
            <Typography variant='h4'>{data.title2}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
            <br/>
            <img className={`w-full`} src={data.img} alt="road"/>
        </div>
    );
};

export default Ability;