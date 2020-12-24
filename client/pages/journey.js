import * as React from 'react';
import {Journey as data} from '../data/Content.json';
import Main from '../components/Methodology/Main';
import Peer from '../components/Methodology/Peer';
import Piscine from '../components/Methodology/Piscine';
import Skills from '../components/Methodology/Skills.jsx';
import Areas from '../components/Methodology/Areas.jsx';
import Journey from '../components/Admissions/Journey';
import Spec from '../components/Admissions/Spec';
import Portfolio from '../components/Admissions/Portfolio';
import Career from '../components/Admissions/Career';
import Alumni from '../components/Admissions/Alumni';
import Cadet from '../components/Methodology/Cadet';

const Methodology = () => {
  return (
    <>
      <Main data={data.PageName} />
      <Peer data={data.Peer} />
      <Journey data={data.Journey} />
      <Piscine data={data.Piscine} />
      <Cadet data={data.Cadet} />
      <Skills data={data.Skills} />
      <Spec data={data.Spec} />
      <Areas data={data.Areas} />
      <Portfolio data={data.Portfolio} />
      <Career data={data.Career} />
      <Alumni data={data.Alumni} />
    </>
  );
};

export default Methodology;
