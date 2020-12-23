import HomeHero from '../components/Home/HomeHero';
import {
  MainPage as data,
  Foundation as foundationData,
} from '../data/Content.json';
import Main from '../components/Foundation/Main';
import Message from '../components/Foundation/Message';

const foundation = () => {
  return (
    <>
      <Main data={foundationData.PageName} />
      <Message data={foundationData.Message} />
    </>
  );
};

export default foundation;
