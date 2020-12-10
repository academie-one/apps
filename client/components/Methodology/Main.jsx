import * as React from 'react';

const Main = ({data}) => {
    return (
        <>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </>
    );
};

export default Main;