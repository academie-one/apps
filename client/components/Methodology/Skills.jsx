import * as React from 'react';
import Typography from '../shared/Typography';

const Skills = ({data}) => {
    return (
        <div className={`mb-12`}>
            <Typography variant='h4'>{data.title}</Typography>
            <br />
            <div className="grid grid-cols-2 gap-4">
                {data.items.map((el, index) => (
                    <>
                        <div>
                            <img className={`w-1/2`} src={el.img} alt="01"/>
                        </div>
                        <div>
                            <Typography variant='h4'>{el.title}</Typography>
                            <br />
                            <Typography varaint='body'>{el.body}</Typography>
                            <br />
                            <Typography varaint='body'>{el.body2}</Typography>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Skills;