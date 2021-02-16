import * as React from 'react';
import Container from '../components/shared/Container';
import {Contact as data} from '../data/Content.json';

const contact = () => {
  return (
    <>
        <Container data={data.PageName} />
        <a href="https://go.2gis.com/pn3hx" target="blank">
            <Container data={data.Address} />
        </a>
    </>
  );
};

export default contact;
