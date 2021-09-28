import React from 'react';
import {Contact as data} from '../data/Content.json';
import Container from '../components/shared/Container';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Social from '../components/Contact/Social';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const contact = () => {
  return (  
    <div className="mb-8">
        <Container data={data.PageName} />
        <a href="https://go.2gis.com/pn3hx" target="blank">
            <Container data={data.Address} />
        </a>
        <LoadScript
          // googleMapsApiKey="YOUR_API_KEY"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
          </GoogleMap>
        </LoadScript>
        <Social data={data.Social}/> 
    </div>
  );
};

export default React.memo(contact);
