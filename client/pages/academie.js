import {Academie as data} from '../data/Content.json';
import Main from '../components/Academie/Main';
import Concept from '../components/Academie/Concept';
import Edu from '../components/Academie/Edu';
import Campus from '../components/Academie/Campus';
import Cluster from '../components/Academie/Cluster';
import Almaty from '../components/Academie/Almaty';

const Academie = () => {
  return (
    <div className={`w-3/5`}>
      <Main data={data.PageName} />
      <Concept data={data.Concept} />
      <Edu data={data.Map} />
      <Campus data={data.Campus} />
      <Cluster data={data.Cluster} />
      <Almaty data={data.Almaty} />
    </div>
  );
};

export default Academie;
