import HomeHero from '../components/Home/HomeHero';
import {
  MainPage as data,
  Foundation as foundationData,
} from '../data/Content.json';
import Main from '../components/Foundation/Main';
import Message from '../components/Foundation/Message';
import Model from '../components/Foundation/Model';

const Home = () => {
  return (
    <>
      <HomeHero data={data} />
      <Main data={foundationData.PageName} />
      <Message data={foundationData.Message} />
      <Model data={foundationData.Model} />
    </>
  );
};

export default Home;
