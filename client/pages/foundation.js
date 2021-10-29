import {Foundation as data} from '../data/Content.json';
import BrandManifesto from '../components/Foundation/BrandManifesto';
import Container from '../components/shared/Container';
import Team from '../components/Foundation/Team';
import Project from '../components/Foundation/Project';
import Values from '../components/Foundation/Values';
import Partners from '../components/Foundation/Partners';

const foundation = () => {
  return (
    <>
      <Container data={data.PageName} />
      <Project data={data.Project} />
      {/* <Container data={data.Brand} /> */}
      {/* <BrandManifesto data={data.BrandManifesto} /> */}
      {/* <Values data={data.Values} /> */}
      <Team data={data.Team} />
      <Partners data={data.FoundPartners} />


    </>
  );
};

export default foundation;
