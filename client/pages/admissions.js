import * as React from 'react';
import {Admissions as data} from '../data/Content.json';
import Main from '../components/Admissions/Main';
import Road from '../components/Admissions/Road';
import ImportantDates from '../components/Admissions/ImportantDates';
import CadetPath from '../components/Admissions/CadetPath';
import Spec from '../components/Admissions/Spec';
import Portfolio from '../components/Admissions/Portfolio';
import Career from '../components/Admissions/Career';
import Alumni from '../components/Admissions/Alumni';

const Admissions = () => {
  return (
    <div className={`w-3/5 mx-3.5`}>
      <Main data={data.PageName} />
      <Road data={data.Road} />
      <ImportantDates data={data.ImportantDates} />
      <CadetPath data={data.CadetPath} />
      <hr />
      <Spec data={data.Spec} />
      <Portfolio data={data.Portfolio} />
      <Career data={data.Career} />
      <Alumni data={data.Alumni} />
      <hr />
      <br />
    </div>
  );
};

export default Admissions;
