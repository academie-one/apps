import Container from '../shared/Container';

const HomeHero = ( {data} ) => {
  return (
    <div>
      <Container data={data.General} />
    </div>
  );
};

export default HomeHero;
