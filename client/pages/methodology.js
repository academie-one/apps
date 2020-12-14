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
    <div className={`w-3/5 mx-3.5`}>
      <Main data={data.PageName}/>
      <Peer data={data.Peer} />
      <hr />
      <Piscine data={data.Piscine} />
      <hr />
      <Program data={data.Program} />
      <Schedule data={data.Schedule} />
      <Skills data={data.Skills} />
      <hr />
      <Ability data={data.Ability} />
      <Areas data={data.Areas} />
    </div>
  );
};

export default Methodology;
