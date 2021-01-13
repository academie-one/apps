import Container from '../components/shared/Container';
import {Terms as termsData} from '../data/Content.json';

const contentArr = ['PageName', 'Legal'];

const Terms = () => {
  return contentArr.map((content, index) => (
    <Container key={index} data={termsData[content]} />
  ));
};

export default Terms;
