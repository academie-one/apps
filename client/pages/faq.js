import Learning from '../components/Faq/Learning';
import Main from '../components/Faq/Main';
import {
    Faq as faqData,
} from '../data/Content.json';


const Faq = () => {
    return (
        <>
            <Main data={faqData.PageName} />
            <Learning data={faqData.Learning} />
        </>
    );
};

export default Faq;
