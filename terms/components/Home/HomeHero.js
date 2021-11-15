import Container from '../shared/Container';
import Homepage from './HomePage';

const HomeHero = ( {data} ) => {
  return (
    <div>
      <Homepage />
      <Container data={data.General} />
      <Container data={data.Definitions} />
      <Container data={data.Subject} />
      <Container data={data.Obligation} />
      <Container data={data.Responsibility} />
      <Container data={data.Conditions} />
      <Container data={data.Usage} />
      <Container data={data.CollectionData} />
      <Container data={data.Goals} />
      <Container data={data.PersonalData} />
      <Container data={data.Crossborder} />
      <Container data={data.Note} />
      <Container data={data.Final} />
    </div>
  );
};

export default HomeHero;
