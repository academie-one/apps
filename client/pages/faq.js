import Learning from '../components/Faq/Learning';
import Container from '../components/shared/Container';
import {Faq as faqData} from '../data/Content.json';

const Faq = () => {
  return (
    <>
      <Container data={faqData.PageName} />
      <Learning data={faqData.Learning} />
    </>
  );
};

export default Faq;
