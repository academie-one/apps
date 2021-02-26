import {Foundation as foundationData} from '../data/Content.json';
import Message from '../components/Foundation/Message';
import Container from '../components/shared/Container';
import Team from '../components/Foundation/Team';

const foundation = () => {
  return (
    <>
      <Container data={foundationData.PageName} />
      <Message data={foundationData.Message} />
      <Team data={foundationData.Team} />
    </>
  );
};

export default foundation;
