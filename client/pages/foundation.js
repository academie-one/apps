import {Foundation as foundationData} from '../data/Content.json';
import Message from '../components/Foundation/Message';
import Container from '../components/shared/Container';

const foundation = () => {
  return (
    <>
      <Container data={foundationData.PageName} />
      <Message data={foundationData.Message} />
    </>
  );
};

export default foundation;
