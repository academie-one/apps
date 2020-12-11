import {Foundation as data} from '../data/Content.json';
import Main from '../components/Foundation/Main';
import Message from '../components/Foundation/Message';
import Model from '../components/Foundation/Model';

const foundation = () => {
  return (
    <div className={`w-3/5`}>
      <Main data={data.PageName} />
      <Message data={data.Message} />
      <Model data={data.Model} />
    </div>
  );
};

export default foundation;
