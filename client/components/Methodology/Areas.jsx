import * as React from 'react';
import Typography from '../shared/Typography';

const Areas = ({data}) => {
    return (
        <div className={`py-16`}>
            <Typography variant='h4'>{data.title}</Typography>
            <br />
            <div class="grid grid-cols-5 gap-4">
                {data.items.map((el, index) => (
                        <div key={index}>
                            <img className={`w-full`} src={el.img} alt="01"/>
                            <Typography variant='h4'>{el.title}</Typography>
                            <br />
                            <Typography varaint='body'>{el.body}</Typography>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Areas;