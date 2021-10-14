import * as React from 'react';
import {Journey as data} from '../data/Content.json';
import Spec from '../components/Methodology/Spec';

import Container from '../components/shared/Container';
import JourneyContainer from '../components/Journey/JourneyContainer';

const Methodology = () => {
  return (
    <>
      <Container data={data.Journey} />
      <JourneyContainer data={data.Piscine} />
      <JourneyContainer data={data.Cadet} />
      <Spec data={data.Spec} />
      <JourneyContainer data={data.Career} itemsDirection={'col'}/>
      <JourneyContainer data={data.Avantage} />
    </>
  );
};

export default Methodology;
