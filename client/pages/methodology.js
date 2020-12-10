import * as React from 'react';
import {Methodology as data} from '../data/Content.json';
import Main from '../components/Methodology/Main';
import Peer from '../components/Methodology/Peer';

const Methodology = () => {
  return (
    <>
      <Main data={data.PageName}/>
      <Peer data={data.Peer} />
    </>
  );
};

export default Methodology;
