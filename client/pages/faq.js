import Curriculum from '../components/Faq/Curriculum';
import Graduation from '../components/Faq/Graduation';
import Learning from '../components/Faq/Learning';
import PiscineFaq from '../components/Faq/Piscinefaq';
import Practical from '../components/Faq/Practical';
import Requirements from '../components/Faq/Requirements';
import Container from '../components/shared/Container';
import {Faq as faqData} from '../data/Content.json';

const Faq = () => {
  return (
    <>
      <Container data={faqData.PageName} />
      <Learning data={faqData.Learning} />
      <Requirements data={faqData.Requirements} />
      <PiscineFaq data={faqData.PiscineFaq} />
      <Curriculum data={faqData.Curriculum} />
      <Graduation data={faqData.Graduation} />
      <Practical data={faqData.Practical} />
    </>
  );
};

export default Faq;
