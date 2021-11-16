import HomeHero from '../components/Home/HomeHero';
import * as React from 'react';
import {Terms as data} from '../data/Content.json';

const Home = () => {
  return (
    <>
      <HomeHero data={data} />
    </>
  );
};

export default Home;
