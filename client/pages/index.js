import {
  HeroPage as data,
} from '../data/Content.json';
import HomeHero from '../components/Home/HomeHero';

const Home = () => {
  return (
    <>
      <HomeHero data={data.HeroPage} />
    </>
  );
};

export default Home;