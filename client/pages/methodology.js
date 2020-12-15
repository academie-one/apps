import * as React from 'react';
import {Methodology as data} from '../data/Content.json';
import Main from '../components/Methodology/Main';
import Peer from '../components/Methodology/Peer';
import Piscine from '../components/Methodology/Piscine';
import Program from '../components/Methodology/Program';
import Schedule from '../components/Methodology/Schedule';
import Skills from '../components/Methodology/Skills.jsx';
import Ability from '../components/Methodology/Ability.jsx';
import Areas from '../components/Methodology/Areas.jsx';

const Methodology = () => {
  return (
    <>
      <Main data={data.PageName} />
      <Peer data={data.Peer} />
      
      <Piscine data={data.Piscine} />
      
      <Program data={data.Program} />
      <Schedule data={data.Schedule} />
      <Skills data={data.Skills} />
      
      <Ability data={data.Ability} />
      {false && <Areas data={data.Areas} />}
    </>
  );
};

export default Methodology;
