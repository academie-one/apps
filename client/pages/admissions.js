import * as React from 'react';
import {Admissions as data} from '../data/Content.json';
import Main from '../components/Admissions/Main';
import Road from '../components/Admissions/Road';
import ImportantDates from '../components/Admissions/ImportantDates';

const Admissions = () => {
  return (
    <>
      <Main data={data.PageName} />
      <ImportantDates data={data.ImportantDates} />
      <Road data={data.Road} />
    </>
  );
};

export default Admissions;
