import Legal from '../components/Terms/Legal';
import Main from '../components/Terms/Main';
import {
    Terms as termsData,
} from '../data/Content.json';


const Terms = () => {
    return (
        <>
            <Main data={termsData.PageName} />
            <Legal data={termsData.Legal} />
        </>
    );
};

export default Terms;
