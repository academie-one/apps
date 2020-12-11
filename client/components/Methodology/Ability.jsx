import * as React from 'react';
import Typography from '../shared/Typography';

const Ability = ({data}) => {
    return (
        <div className={`py-16`}>
            <Typography variant='h3'>{data.title}</Typography>
            <Typography variant='h4'>{data.title2}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
            <br/>
            <img className={`w-full`} src={data.img} alt="road"/>
        </div>
    );
};

export default Ability;