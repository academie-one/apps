import * as React from 'react';
import {Admissions as data} from '../data/Content.json';
import Road from '../components/Admissions/Road';
import ImportantDates from '../components/Admissions/ImportantDates';
import Container from '../components/shared/Container';

const Admissions = () => {
  return (
    <>
      <Container data={data.PageName} />
      <ImportantDates data={data.ImportantDates} />
      <Road data={data.Road} />
    </>
  );
};

export default Admissions;
