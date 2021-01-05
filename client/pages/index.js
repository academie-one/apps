import {Academie as data} from '../data/Content.json';
import Main from '../components/Academie/Main';
import Concept from '../components/Academie/Concept';
import Edu from '../components/Academie/Edu';
import Campus from '../components/Academie/Campus';
import Almaty from '../components/Academie/Almaty';
import FinancialModel from '../components/Academie/FinancialModel';

const Academie = () => {
  return (
    <>
      <Main data={data.PageName} />
      <Concept data={data.Concept} />
      <Edu data={data.Edu} />
      <FinancialModel data={data.FinancialModel} />
      <Campus data={data.Campus} />
      <Almaty data={data.Almaty} />
    </>
  );
};

export default Academie;
