import * as React from 'react';
import {Methodology as data} from '../data/Content.json';
import Main from '../components/Methodology/Main';

const Methodology = () => {
  return (
    <>
    {console.log(data)}
    {/* Hi */}
      <Main data={data.Main}/>
    </>
  );
};

export default Methodology;
