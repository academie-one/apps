import HomeHero from '../components/Home/HomeHero';
import {MainPage as data} from '../data/Content.json';

const Home = () => {
  return <HomeHero data={data} />;
};

export default Home;
