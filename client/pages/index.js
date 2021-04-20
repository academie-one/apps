import {
  Hero as data,
  // Admissions as admissionData,
} from '../data/Content.json';
import HomeHero from '../components/Home/HomeHero';
//import ImportantDates from '../components/Admissions/ImportantDates';

const Home = () => {
  return (
    <>
      <HomeHero data={data} />
      {/* <ImportantDates data={admissionData.ImportantDates} /> */}
    </>
  );
};

export default Home;
