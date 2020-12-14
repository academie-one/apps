import * as React from 'react';
import Typography from '../shared/Typography';

const Piscine = ({data}) => {
    return (
        <div className={`py-16`}>
            <Typography variant='h2'>{data.title}</Typography>
            <br />
            <Typography variant='h4'>{data.title2}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
            <br />
            <img className={`w-full`} src={data.img} alt="Vanya"/>
            <br />
            <div className={`flex justify-start space-x-4`}>
                {data.items.map((el, index) => (
                    <div className={`flex-1`}>
                        <Typography variant='h4'>{el.title}</Typography>
                        <br />
                        <Typography varaint='body'>{el.body}</Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Piscine;