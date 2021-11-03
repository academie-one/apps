import React from 'react';
import {Contact as data} from '../data/Content.json';
import Container from '../components/shared/Container';
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import Social from '../components/Contact/Social';
import {Map, Marker} from 'pigeon-maps';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const contact = () => {
  return (
    <div className="mb-16">
      <Container data={data.PageName} />
      <a href="https://go.2gis.com/pn3hx" target="blank">
        <Container data={data.Address} />
      </a>
      <Map height={300} defaultCenter={[43.25797, 76.90636]} defaultZoom={17}>
        <Marker width={50} anchor={[43.25851, 76.90616]} />
      </Map>
      &nbsp;
      <Social data={data.Social} />
    </div>
  );
};

export default React.memo(contact);
