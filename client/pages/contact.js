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
        {/* <LoadScript
          // googleMapsApiKey="YOUR_API_KEY"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
          </GoogleMap>
        </LoadScript> */}
         <img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284"/> 
        <Social data={data.Social}/> 
    </div>
  );
};

export default React.memo(contact);
