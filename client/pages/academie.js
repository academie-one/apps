import {Academie as data} from '../data/Content.json';
import Container from '../components/shared/Container';
import JourneyContainer from "../components/Journey/JourneyContainer";
import Graduates from '../components/Academie/Graduates';

const Academie = () => {
  return (
    <>
      <JourneyContainer data={data.PageName} />
      <JourneyContainer data={data.Concept} itemsDirection={'col'} />
      <JourneyContainer data={data.Edu} />
      <Graduates data={data.Graduates} />
      <JourneyContainer data={data.Methodology} itemsDirection={'col'} />
      <Container data={data.Campus} />
      <Container data={data.Almaty} />
    </>
  );
};

export default Academie;
