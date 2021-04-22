import {Academie as data} from '../data/Content.json';
import Container from '../components/shared/Container';
import Graduates from '../components/Academie/Graduates';

const Academie = () => {
  return (
    <>
      <Container data={data.PageName} />
      <Container data={data.Concept} />
      <Container data={data.Edu} />
      <Graduates data={data.Graduates} />
      <Container data={data.Methodology} />
      <Container data={data.Campus} />
      <Container data={data.Almaty} />
    </>
  );
};

export default Academie;
