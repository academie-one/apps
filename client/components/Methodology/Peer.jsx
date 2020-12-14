import * as React from 'react';
import Typography from '../shared/Typography';

const Peer = ({data}) => {
    return (
        <div className={`pb-16`}>
            <Typography variant='h2'>{data.title}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
            <br />
            <div className={`sm:flex sm:items-baseline`}>
                {data.items.map((el, index) => (
                    <div className={`px-4 text-left`}>
                        <img className={`w-full`} src={el.img} alt="urban"/>
                        <Typography variant='h4'>{el.title}</Typography>
                        <br />
                        <Typography varaint='body'>{el.body}</Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Peer;