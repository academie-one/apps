import * as React from 'react';
import Typography from '../shared/Typography';

const ImportantDates = ({data}) => {
    return (
        <div className={`box-border rounded-2xl h-auto w-auto p-4 border-2`}>
            <Typography variant='h4'>{data.title}</Typography>
            <br />
            <div className={`space-y-3`}>
                {data.body.map((el, index) => (
                        <>
                            <Typography varaint='body'>{el}</Typography>
                        </>
                    ))}
            </div>
        </div>
    );
};

export default ImportantDates;