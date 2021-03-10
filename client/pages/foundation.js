import {Foundation as data} from '../data/Content.json';
import Message from '../components/Foundation/Message';
import BrandManifesto from '../components/Foundation/BrandManifesto';
import Container from '../components/shared/Container';
import Team from '../components/Foundation/Team';
import Project from '../components/Foundation/Project';
import Values from '../components/Foundation/Values';

const foundation = () => {
  return (
    <>
      <Container data={data.PageName} />
      <Project data={data.Project} />
      <Container data={data.Brand} />
      <BrandManifesto data={data.BrandManifesto} />
      <Values data={data.Values} />
      <Message data={data.Message} />
      <Team data={data.Team} />

    </>
  );
};

export default foundation;
