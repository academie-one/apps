import {Academie as data} from '../data/Content.json';
import Container from '../components/shared/Container';

const contentArr = [
  'PageName',
  'Concept',
  'Edu',
  'FinancialModel',
  'Campus',
  'Almaty',
];

const Academie = () => {
  return contentArr.map((content, index) => (
    <Container key={index} data={data[content]} />
  ));
};

export default Academie;
