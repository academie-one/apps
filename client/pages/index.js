import {
  Academie as data,
} from '../data/Content.json';
import HomeHero from '../components/Home/HomeHero';

const Home = () => {
  return (
    <>
      <HomeHero data={data.Hero} />
    </>
  );
};

export default Home;