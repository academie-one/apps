import * as React from 'react';
import Typography from '../shared/Typography';

const Road = ({data}) => {
    return (
        <div className={`pb-16`}>
            <Typography variant='h2'>{data.title}</Typography>
            <br />
            <Typography variant='body'>{data.body}</Typography>
            <br />
            <div class="grid grid-cols-2 gap-4">
                {data.items.map((el, index) => (
                    <>
                        <div>
                            <img className={`w-3/5`} src={el.img} alt="01"/>
                        </div>
                        <div>
                            <Typography variant='h4'>{el.title}</Typography>
                            <br />
                            <Typography varaint='body'>{el.body}</Typography>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Road;