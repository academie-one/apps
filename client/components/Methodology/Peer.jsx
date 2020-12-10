import * as React from 'react';

const Peer = ({data}) => {
    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <div style={{display: 'flex'}}>
                {data.items.map((el, index) => (
                    <>
                        <h1>{el.title}</h1>
                        <p>{el.body}</p>
                    </>
                ))}
            </div>
        </>
    );
};

export default Peer;