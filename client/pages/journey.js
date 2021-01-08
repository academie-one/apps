import * as React from 'react';
import {Journey as data} from '../data/Content.json';
import Piscine from '../components/Methodology/Piscine';
import Skills from '../components/Methodology/Skills.jsx';

import Container from '../components/shared/Container';

const Methodology = () => {
  return (
    <>
      <Container data={data.PageName} />
      <Container data={data.Peer} />
      <Container data={data.Journey} />
      <Piscine data={data.Piscine} />
      <Container data={data.Cadet} />
      <Skills data={data.Skills} />
      <Container data={data.Spec} />
      <Container data={data.Portfolio} />
      <Container data={data.Career} />
      <Container data={data.Alumni} />
    </>
  );
};

export default Methodology;
